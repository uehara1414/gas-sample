import { ChatworkWebhookData } from "./models";



export interface IChatworkDatasoruce {
  getChatworkResults(c: ChatworkWebhookData)
}
