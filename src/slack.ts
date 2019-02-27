import { ChatworkWebhookData } from './models';

export class SlackNotifier {
  constructor(SLACK_WEBHOOK_URL: string) {}

  notify = (webhookData: ChatworkWebhookData): boolean => {
    const options = {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      payload: JSON.stringify({ text: webhookData.body })
    };
    // @ts-ignore
    UrlFetchApp.fetch(this.SLACK_WEBHOOK_URL, options);
    return true;
  };

}
