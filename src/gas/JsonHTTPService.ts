import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import { IConnection } from './interfaces';

export class JsonHTTPService {
  constructor(private httpConnection: IConnection) {}

  post = (url: string, payload: object): HTTPResponse => {
    const options = {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      payload: JSON.stringify(payload)
    };
    // @ts-ignore
    return this.httpConnection.request(url, options);
  };
}
