import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

export interface IConnection {
  request(url: string, options?: any);
}

export interface IJsonHTTPService {
  post: (url: string, payload: object) => HTTPResponse;
}
