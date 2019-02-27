import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import { Connection, JsonHTTPService } from './interfaces';
import { GASJsonHTTPService } from './GASJsonHTTPService';

class GASConnection implements Connection {
  request(url: string, options?: any) {
    return UrlFetchApp.fetch(url, options);
  }
}

export const getJsonHTTPService = (): JsonHTTPService => {
  return new GASJsonHTTPService(new GASConnection());
};
