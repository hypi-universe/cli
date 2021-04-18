export interface UserConfigType {
  sessionExpires: number;
  sessionToken: string;
  domain: string;
}

export interface DataResponse {
  error: string;
  data: any;
}

export interface ExistsResponse extends DataResponse {
  exists: boolean;
}
