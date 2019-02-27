import { ChatworkWebhookData } from './models';
import { getGASJsonHTTPService, JsonHTTPService } from './gas';

export class SlackNotifier {
  webhook_url: string;
  httpService: JsonHTTPService;
  constructor(webhook_url: string) {
    this.webhook_url = webhook_url;
    this.httpService = getGASJsonHTTPService();
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
