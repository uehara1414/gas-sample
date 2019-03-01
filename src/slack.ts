import { ChatworkWebhookData } from './models';
import { IJsonHTTPService } from './http/interfaces';

export class SlackNotifier {
  webhook_url: string;
  jsonHttpService: IJsonHTTPService;

  constructor(httpService: IJsonHTTPService, webhook_url: string) {
    this.webhook_url = webhook_url;
    this.jsonHttpService = httpService;
  }

  notify = (webhookData: ChatworkWebhookData): boolean => {
    this.jsonHttpService.post(this.webhook_url, { text: webhookData.body });
    return true;
  };
}
