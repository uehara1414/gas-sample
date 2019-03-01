import { SlackNotifier } from '../src/slack';
import { JsonHTTPService } from '../src/gas/JsonHTTPService';

describe('slack', () => {
  describe('notify', () => {
    it('null', () => {
      const request = jest.fn();
      const MockHTTPConnection = jest.fn().mockImplementation(() => {
        return {
          request
        };
      })
      const jsonHTTPService = new JsonHTTPService(new MockHTTPConnection());
      const notifier = new SlackNotifier(jsonHTTPService, 'dummy');
      notifier.notify({
        from_account_id: '12345',
        room_id: '12345',
        message_id: '12345',
        body: 'Hello World!',
        send_time: new Date()
      });
      expect(request).toBeCalled();
    });
  });
});
