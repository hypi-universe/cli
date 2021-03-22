export interface HypiConfigType {
  url: string;
  configDir: string;
}

export interface UserConfigType {
  sessionExpires: number,
  sessionToken: string,
  domain: string
}
