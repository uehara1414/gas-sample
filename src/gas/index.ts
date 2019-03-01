import { IConnection, IJsonHTTPService } from './interfaces';

export class GASConnection implements IConnection {
  request(url: string, options?: any) {
    return UrlFetchApp.fetch(url, options);
  }
}
