import { SlackNotifier } from '../src/slack';
import { ChatworkWebhookData } from '../src/models';

describe('slack', () => {
  describe('notify', () => {
    it('null', () => {
      const notifier = new SlackNotifier('dummy');
      notifier.notify({
        from_account_id: '12345',
        room_id: '12345',
        message_id: '12345',
        body: 'Hello World!',
        send_time: new Date()
      });
      expect(notifier.notify).toBeCalled();
    });
  });
});
