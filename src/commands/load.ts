
import { flags } from '@oclif/command'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'
import AuthCommand from '../auth-base'

import { messages } from '../hypi/helpers/messages'
import ArrayLoadService from '../hypi/services/load-files/array'
import Context from '../hypi/services/load-files/context'
import CsvLoadService from '../hypi/services/load-files/csv'
import LineDelimitedLoadService from '../hypi/services/load-files/line-delimited'
import LoadService, { LoadFileTypes } from '../hypi/services/load-service'

const fileTypeOptions = LoadService.fileTypesArray()

export default class Load extends AuthCommand {
    static description = 'Load data from file and Upsert to hypi Graphql Type'

    static flags = {
        help: flags.help({ char: 'h' }),
        file: flags.string({ char: 'f' }),
        kind: flags.string({ char: 'k', options: fileTypeOptions }),
        mapping: flags.string({ char: 'm' }),
        gl_type: flags.string({ char: 't' }),
    }

    static examples = [
        '$ hypi load -f file.json -k line_delimited -t MyType',
        '$ hypi load -f file.json -k line_delimited -m mapping.json -t MyType',
    ]

    async run() {
        const { args, flags } = this.parse(Load);

        if (!flags.file || !flags.kind || !flags.gl_type) {
            const errrorMsgs: string[] = [];
            if (!flags.file) errrorMsgs.push(messages.loadCommand.fileRequired)
            if (!flags.kind) errrorMsgs.push(messages.loadCommand.kindRequired + '' + fileTypeOptions)
            if (!flags.gl_type) errrorMsgs.push(messages.loadCommand.glTypeRequired)
            this.error(errrorMsgs.join(' , '));
        }

        //check file exists
        const loadService = new LoadService();
        if (!loadService.doesFileExists(flags.file)) this.error(messages.loadCommand.fileNotFound);

        // if mapping exists, check file exists
        if (flags.mapping && !loadService.doesFileExists(flags.mapping)) this.error(messages.loadCommand.MapfileNotFound);

        const loadTypeContext = new Context(new LineDelimitedLoadService());
        switch (flags.kind) {
            case LoadFileTypes.line_delimited:
                loadTypeContext.setLoadFileType(new LineDelimitedLoadService())
                break;
            case LoadFileTypes.array:
                loadTypeContext.setLoadFileType(new ArrayLoadService())
                break;
            case LoadFileTypes.csv:
                loadTypeContext.setLoadFileType(new CsvLoadService())
                break;
        }

        const filePath = loadService.getFileFullPath(flags.file);
        let mappingPath
        if (flags.mapping) {
            mappingPath = loadService.getFileFullPath(flags.mapping);
        }

        loadTypeContext.load(filePath, flags.gl_type, mappingPath);
    }
}