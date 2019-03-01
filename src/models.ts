export interface ChatworkWebhookData {
  from_account_id: string;
  room_id: string;
  message_id: string;
  body: string;
  send_time: Date;
  chatworkAPIResults?: ChatworkAPIResults;
}

export interface ChatworkAPIResults {
  from_account_name: string;
  from_account_avatar: string;
  room_name: string;
}

/*
curl -X GET -H "X-ChatWorkToken: 自分のAPIトークン" "https://api.chatwork.com/v2/rooms/{room_id}/messages/{message_id}"
{
  "message_id": "5",
  "account": {
    "account_id": 123,
    "name": "Bob",
    "avatar_image_url": "https://example.com/ico_avatar.png"
  },
  "body": "Hello Chatwork!",
  "send_time": 1384242850,
  "update_time": 0
}

curl -X GET -H "X-ChatWorkToken: 自分のAPIトークン" "https://api.chatwork.com/v2/rooms/{room_id}"
{
  "room_id": 123,
  "name": "Group Chat Name",
  "type": "group",
  "role": "admin",
  "sticky": false,
  "unread_num": 10,
  "mention_num": 1,
  "mytask_num": 0,
  "message_num": 122,
  "file_num": 10,
  "task_num": 17,
  "icon_path": "https://example.com/ico_group.png",
  "last_update_time": 1298905200,
  "description": "room description text"
}
 */
