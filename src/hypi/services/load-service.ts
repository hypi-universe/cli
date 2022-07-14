import Utils from '../helpers/utils'
import * as fs from 'fs-extra'
import * as path from 'path'
import upsertMutation from '../graphql/mutations/upsert-app'

export enum LoadFileTypes {
    line_delimited = 'line_delimited',
    array = 'array',
    csv = 'csv',
}
export default class LoadService {
    private curDir = process.cwd();

    static fileTypesArray() {
        return Utils.enumToArray(LoadFileTypes)
    }

    doesFileExists(filePath: string) {
        if (fs.existsSync(path.join(this.curDir, filePath))) return true;
        return false
    }

    getFileFullPath(filePath: string) {
        return path.join(this.curDir, filePath);
    }


    getMappings(mappingFilePath: string) {
        let mapping: any;

        if (mappingFilePath && mappingFilePath !== "") {
            const appFile: string = fs.readFileSync(mappingFilePath, 'utf-8');
            mapping = JSON.parse(appFile);
        } else {
            mapping = {}
        }
        return mapping;
    }

    isValidMapping(mapping: any, fields: any) {

        if (!mapping) return { error: false, valid: true };
        for (const key in mapping) {
            if (fields.indexOf(key) === -1) {
                return { error: "'Mapping to non correct field'", valid: false };
            }
        }
        return { error: false, valid: true };
    }

    doMapping(items: any, mapping: any) {
        if (!mapping) return items;;
        for (const key in mapping) {
            const newKey = mapping[key];
            for (const item of items) {
                item[newKey] = item[key];
                delete item[key];
            }
        }
        return items;
    }

    async upsertBulk(glType: string, items: [], keys: string[], mapping: any) {

        const upsertObject: any = {};
        upsertObject[glType] = items;

        const values = {
            values: upsertObject
        }

        try {
            const resposne = await upsertMutation(values)
            if (resposne.errors) {
                const errorMessages = resposne.errors.map((error: any) => {
                    return error.message
                }).concat()
                console.log(errorMessages)
            }
            console.log(resposne.data.upsert[0])
        } catch (error) {
            console.log(error)
        }
    }
}

