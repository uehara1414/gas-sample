import { SlackNotifier } from '../src/slack';
import { GASJsonHTTPService } from "../src/gas/GASJsonHTTPService";
import { JsonHTTPService } from "../src/gas/interfaces";

describe('slack', () => {
  describe('notify', () => {
    it('null', () => {
      const request = jest.fn();
      const MockHTTPConnection = jest.fn().mockImplementation(() => {
        return {
          request
        };
      })
      // @ts-ignore
      const jsonHTTPService = new GASJsonHTTPService(new MockHTTPConnection());
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
