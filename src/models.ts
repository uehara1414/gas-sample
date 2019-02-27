export interface ChatworkWebhookData {
  from_account_id: string;
  room_id: string;
  message_id: string;
  body: string;
  send_time: Date;
}
