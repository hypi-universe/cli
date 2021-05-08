
export default class Context {
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform
  }

  public setPlatform(platform: Platform) {
    this.platform = platform
  }

  public async validate(): Promise<any> {
    return this.platform.validate()
  }

  public async generate(): Promise<any> {
    return this.platform.generate()
  }
}
