import { SlackNotifier } from '../src/slack';
import { JsonHTTPService } from '../src/http/JsonHTTPService';

describe('slack', () => {
  let request;
  let MockHTTPConnection;
  let jsonHTTPService;
  let notifier;

  beforeEach(() => {
    request = jest.fn();
    MockHTTPConnection = jest.fn().mockImplementation(() => {
      return {
        request
      };
    });
    jsonHTTPService = new JsonHTTPService(new MockHTTPConnection());
    notifier = new SlackNotifier(jsonHTTPService, 'dummy');
  });

  describe('notify', () => {
    it('null', () => {
      notifier.notify({
        from_account_id: '12345',
        room_id: '12345',
        message_id: '12345',
        body: 'Hello World!',
        send_time: new Date()
      });

      const payload = {
        text: 'Hello World!'
      };

      expect(request).toBeCalled();
      expect(request).toBeCalledWith('dummy', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        payload: JSON.stringify(payload)
      });
    });
  });
});
