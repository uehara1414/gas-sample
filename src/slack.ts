import { ChatworkWebhookData } from './models';
import { JsonHTTPService } from './gas/interfaces';

export class SlackNotifier {
  webhook_url: string;
  httpService: JsonHTTPService;
  constructor(httpService: JsonHTTPService, webhook_url: string) {
    this.webhook_url = webhook_url;
    this.httpService = httpService;
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
