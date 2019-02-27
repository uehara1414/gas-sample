import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;

interface Connection {
  request(url: string, options?: any);
}

export interface JsonHTTPService {
  post: (url: string, payload: object) => HTTPResponse;
}

class GASConnection implements Connection {
  request(url: string, options?: any) {
    return UrlFetchApp.fetch(url, options);
  }
}

class GASJsonHTTPService {
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

export const getGASJsonHTTPService = (): GASJsonHTTPService => {
  return new GASJsonHTTPService(new GASConnection());
};
