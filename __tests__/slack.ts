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
        from_account_id: '1826217',
        room_id: '49235396',
        message_id: '1153175727894470656',
        body: 'Hello World!',
        send_time: new Date()
      });

      const payload = {
        username: 'メンション通知君',
        attachments: [
          {
            author_name: 'uehara1414',
            author_link: 'https://www.chatwork.com/uehara1414',
            author_icon: 'https://appdata.chatwork.com/avatar/2511/2511127.rsz.png',
            title: '部屋名',
            title_link: 'https://www.chatwork.com/#!rid49235396-1153175727894470656',
            text: 'Hello World!'
          }
        ]
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
