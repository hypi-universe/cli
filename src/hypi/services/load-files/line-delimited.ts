
import * as fs from 'fs-extra'
import * as path from 'path'
import * as es from 'event-stream';
import flatten from 'flat';
import LoadService from '../load-service';
import { exit } from 'process';

export default class LineDelimitedLoad implements LoadFileInterface {
    private file!: string;
    private glType!: string;
    private mappingPath!: string;

    load(file: string, glType: string, mappingPath: string) {
        console.log('Load line delimited');

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

    readFile(count: number) {
        const loadService = new LoadService();

        let items: any = [];
        let totalProcessed = 0;
        const glType = this.glType;
        let fields: string[] = [];

        const mapping = loadService.getMappings(this.mappingPath);
        var s = fs.createReadStream(this.file)
            .pipe(es.split())
            .pipe(es.mapSync(async function (line: any) {
                s.pause();
                try {
                    if (line.trim().length > 0) {
                        let data: any = flatten(JSON.parse(line));
                        if (totalProcessed === 0) {
                            fields = Object.keys(data);
                            const res = loadService.isValidMapping(mapping, fields);
                            if (res.error) {
                                console.log('Mapping to non correct field');
                                exit();
                            }
                        }
                        items.push(data);
                        const left = count - totalProcessed;
                        if (items.length === 25 || items.length === left) {
                            const mappedItems = loadService.doMapping(items, mapping);
                            await loadService.upsertBulk(glType, mappedItems, fields, mapping);
                            items = [];
                            totalProcessed += 25;
                        }
                    }
                } catch (e) {
                    console.log('Got an errr - resuming', e);
                }
                s.resume();
            }).on('error', function (err) {
                console.log('Error while reading file.', err);
            }).on('end', function () {
                console.log('Read entire file.')
            })
            );
    }

}