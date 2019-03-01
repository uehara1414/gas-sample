import { ChatworkWebhookData } from '../models';
import { IJsonHTTPService } from '../http/interfaces';

export class SlackNotifier {
  webhook_url: string;
  jsonHttpService: IJsonHTTPService;
  buildJson: (ChatworkWebhookData) => any

  constructor(
    httpService: IJsonHTTPService,
    webhook_url: string,
    buildJson: (ChatworkWebhookData) => any
  ) {
    this.webhook_url = webhook_url;
    this.jsonHttpService = httpService;
    this.buildJson = buildJson;
  }

  notify = (webhookData: ChatworkWebhookData): boolean => {
    this.jsonHttpService.post(this.webhook_url, this.buildJson(webhookData));
    return true;
  };
}
