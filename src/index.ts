import { ChatworkWebhookData } from './models';
import { SlackNotifier } from './slack';

declare var global: any;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const notifier = new SlackNotifier(SLACK_WEBHOOK_URL);

const getRoomName = (roomId: string): string => {
  return '';
};

global.doGet = (e: any): any => {
  const out = ContentService.createTextOutput();
  out.setContent(JSON.stringify({ Hello: 'World' }));
  const sampleWebhookData: ChatworkWebhookData = {
    from_account_id: '12345',
    room_id: '12345',
    message_id: '12345',
    body: 'Hello World!',
    send_time: new Date()
  };
  notifier.notify(sampleWebhookData);
  return out;
};

const postDataToChatworkWebhookData = (postData: any): ChatworkWebhookData => {
  const params = postData.getDataAsString();
  const sampleWebhookData: ChatworkWebhookData = {
    from_account_id: '12345',
    room_id: '12345',
    message_id: '12345',
    body: 'Hello World!',
    send_time: new Date()
  };
  return sampleWebhookData;
}

global.doPost = (e: any): any => {
  const webhookData = postDataToChatworkWebhookData(e.postData);

  notifier.notify(webhookData);

  const out = ContentService.createTextOutput();
  out.setContent(JSON.stringify({ message: 'Thank you Chatwork!' }));
  return out;
};
