import { ChatworkWebhookData } from './models';
import { getJsonHTTPService } from './gas/index';
import { JsonHTTPService } from './gas/interfaces';

export class SlackNotifier {
  webhook_url: string;
  httpService: JsonHTTPService;
  constructor(webhook_url: string) {
    this.webhook_url = webhook_url;
    this.httpService = getJsonHTTPService();
  }

  notify = (webhookData: ChatworkWebhookData): boolean => {
    const options = {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      payload: JSON.stringify({ text: webhookData.body })
    };
    this.httpService.post(this.webhook_url, options);
    return true;
  };
}
