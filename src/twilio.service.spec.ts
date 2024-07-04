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
        <Say>I just want to say I love you, and I mean it from the bottom of my heart.</Say>
      </Response>
    `;

      const result = service.handleIncomingCall();

      expect(result).toEqual(expectedResponse);
    });
  });
});
