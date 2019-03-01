import { IConnection, IJsonHTTPService } from './interfaces';
import { ChatworkWebhookData } from "../models";

export class GASConnection implements IConnection {
  request(url: string, options?: any) {
    return UrlFetchApp.fetch(url, options);
  }
}

export class GASHTTPReceiver {
  static get = (req: any): any => {
    return {};
  };

  static post = (req: any): any => {
    this.postDataToChatworkWebhookData()
    return {};
  }

  static postDataToChatworkWebhookData = (postData: any): ChatworkWebhookData => {
    const params = postData.getDataAsString();
    const sampleWebhookData: ChatworkWebhookData = {
      from_account_id: '12345',
      room_id: params.webhook_event.room_id,
      message_id: params.webhook_event.message_id,
      body: params.webhook_event.body,
      send_time: new Date()
    };
    return sampleWebhookData;
  };
}
