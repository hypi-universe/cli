
export default class LoadFile implements LoadFileInterface {

    protected file: string;
    protected glType: string;
    protected mappingPath: string;


    constructor(file: string, glType: string, mappingPath: string) {
        this.file = file || "";
        this.glType = glType || "";
        this.mappingPath = mappingPath || "";
    }

    load() {
    }
}