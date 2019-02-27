import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import { Connection } from './interfaces';

export class GASJsonHTTPService {
  constructor(private httpConnection: Connection) {}

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
