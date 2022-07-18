
export default class Context {
    private loadFileType!: LoadFileInterface;

    public setLoadFileType(loadFileType: LoadFileInterface) {
        this.loadFileType = loadFileType
    }

    public load(file: string, gl_type: string, mapping: string | undefined): void {
        return this.loadFileType.load(file, gl_type, mapping);
    }
}
