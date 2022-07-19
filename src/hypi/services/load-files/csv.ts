
import LoadService from "../load-service";
import flatten from 'flat';
import { parse } from 'csv-parse';
import * as es from 'event-stream';

import fs from 'fs';
import { exit } from "process";

export default class CsvLoad implements LoadFileInterface {
    private file!: string;
    private glType!: string;
    private mappingPath!: string;

    load(file: string, glType: string, mappingPath: string) {
        console.log('Load csv');

        this.file = file || "";
        this.glType = glType || "";
        this.mappingPath = mappingPath || "";

        this.getLinesCount();
    }

    getLinesCount() {
        let i;
        let count = 0;
        fs.createReadStream(this.file)
            .on('data', chunk => {
                for (i = 1; i < chunk.length; i++) if (chunk[i] === 10) count++;
            })
            .on('end', () => this.readFile(count));
    }

    async readFile(count: number) {

        const loadService = new LoadService();

        let items: any = [];
        let totalProcessed = 0;
        const glType = this.glType;
        let fields: string[] = [];

        const mapping = loadService.getMappings(this.mappingPath);

        const parser = fs.createReadStream(this.file).pipe(parse({ columns: true }));

        for await (const record of parser) {
            let data: any = flatten(record);
            if (totalProcessed === 0) {
                fields = Object.keys(data);
                const res = loadService.isValidMapping(mapping, fields);
                if (res.error) {
                    console.log('Mapping to non correct field');
                    exit();
                }
            }
            items.push(data);
            const left = count - totalProcessed - 1;
            if (items.length === LoadService.UPSERT_COUNT || items.length === left) {
                console.log(items)
                const mappedItems = loadService.doMapping(items, mapping);
                await loadService.upsertBulk(glType, mappedItems);
                totalProcessed += items.length;
                items = [];
            }
            if (count - totalProcessed - 1 === 0)
                console.log(`Total processed ${totalProcessed} records.`)
        }
    }
}