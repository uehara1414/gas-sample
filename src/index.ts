import { ChatworkWebhookData } from './models';
import { SlackNotifier } from './notifier/slack';
import { GASConnection } from './http/index';
import { JsonHTTPService } from './http/JsonHTTPService';

declare var global: any;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const connection = new GASConnection();
const jsonHttpService = new JsonHTTPService(connection);
const notifier = new SlackNotifier(jsonHttpService, SLACK_WEBHOOK_URL, webhookData => {
  if (webhookData.chatworkAPIResults !== null) {
    return {
      attachments: [
        {
          author_name: webhookData.chatworkAPIResults.from_account_name,
          author_icon: webhookData.chatworkAPIResults.from_account_avatar,
          title: webhookData.chatworkAPIResults,
          title_link: `https://www.chatwork.com/#!rid${webhookData.room_id}-${
            webhookData.message_id
          }`,
          text: webhookData.body
        }
      ]
    };
  } else {
    return {
      attachments: [
        {
          author_name: '---',
          title: webhookData.room_id,
          title_link: `https://www.chatwork.com/#!rid${webhookData.room_id}-${
            webhookData.message_id
          }`,
          text: webhookData.body
        }
      ]
    };
  }
});

const getRoomName = (roomId: string): string => {
  return '';
};

global.doGet = (e: any): any => {
  const sampleWebhookData: ChatworkWebhookData = {
    from_account_id: '12345',
    room_id: '12345',
    message_id: '12345',
    body: 'Hello World!',
    send_time: new Date()
  };
  notifier.notify(sampleWebhookData);

  const out = ContentService.createTextOutput();
  out.setContent(JSON.stringify({ Hello: 'World' }));
  return out;
};

const postDataToChatworkWebhookData = (postData: any): ChatworkWebhookData => {
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

global.doPost = (e: any): any => {
  const webhookData = postDataToChatworkWebhookData(e.postData);
  notifier.notify(webhookData);

  const out = ContentService.createTextOutput();
  out.setContent(JSON.stringify({ message: 'Thank you Chatwork!' }));
  return out;
};
