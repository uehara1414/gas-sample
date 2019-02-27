import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

export interface Connection {
  request(url: string, options?: any);
}

export interface JsonHTTPService {
  post: (url: string, payload: object) => HTTPResponse;
}
