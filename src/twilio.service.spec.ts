import { TwilioService } from './twilio.service';

describe('TwilioService', () => {
  let service: TwilioService;

  beforeEach(() => {
    service = new TwilioService(); // Initialize the TwilioService instance
  });

  describe('handleIncomingCall', () => {
    it('should return a TwiML response', () => {
      const expectedResponse = `
      <Response>
        <Say>Hello, I love you. Have a nice day.</Say>
      </Response>
    `;

      const result = service.handleIncomingCall();

      expect(result).toEqual(expectedResponse);
    });
  });
});
