import LoadService from "../load-service";
import flatten from 'flat';
import { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamArray } from 'stream-json/streamers/StreamArray';

import fs from 'fs';
import { exit } from "process";

export default class ArrayLoad implements LoadFileInterface {

    private file!: string;
    private glType!: string;
    private mappingPath!: string;


    load(file: string, glType: string, mappingPath: string) {
        console.log('Loading file');

        this.file = file || "";
        this.glType = glType || "";
        this.mappingPath = mappingPath || "";

        let totalProcessed = 0;
        let fields: string[] = [];
        let items: any = [];

        const loadService = new LoadService();
        const mapping = loadService.getMappings(this.mappingPath);

        const pipeline = chain([
            fs.createReadStream(file),
            parser(),
            streamArray(),
            data => {
                return data.value;
            },
            data => {
                return flatten(data);
            }
        ]);

        pipeline.on('data', async (data) => {
            if (totalProcessed === 0) {
                fields = Object.keys(data);
                const res = loadService.isValidMapping(mapping, fields);
                if (res.error) {
                    console.log('Mapping to non correct field');
                    exit();
                }
            }
            items.push(data);
            if (items.length === LoadService.UPSERT_COUNT) {
                pipeline.pause();
                await this.doUpsert(glType, items, mapping);
                pipeline.resume();
                totalProcessed += LoadService.UPSERT_COUNT;
                items = [];
            }
        });

        pipeline.on('end', async () => {
            if (items.length > 0) {
                pipeline.pause();
                await this.doUpsert(glType, items, mapping);
                pipeline.resume();
                totalProcessed += items.length;
                items = [];
                items.length = 0;
            }
            console.log(`Total processed ${totalProcessed} records.`)
        });

    }

    async doUpsert(glType: string, items: any, mapping: any) {
        const loadService = new LoadService();
        const mappedItems = loadService.doMapping(items, mapping);
        await loadService.upsertBulk(glType, mappedItems);
        return items.length
    }
}