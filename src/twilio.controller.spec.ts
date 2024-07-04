import { Test, TestingModule } from '@nestjs/testing';
import { TwilioController } from './twilio.controller';
import { TwilioService } from './twilio.service';

describe('TwilioController', () => {
  let controller: TwilioController;
  let twilioService: TwilioService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TwilioController],
      providers: [TwilioService],
    }).compile();

    controller = moduleRef.get<TwilioController>(TwilioController);
    twilioService = moduleRef.get<TwilioService>(TwilioService);
  });

  describe('handleIncomingCall', () => {
    it('should return a TwiML response', async () => {
      const twimlResponse = `
        <Response>
          <Say>Hello, I love you. Have a nice day.</Say>
        </Response>
      `;

      jest
        .spyOn(twilioService, 'handleIncomingCall')
        .mockReturnValue(twimlResponse);

      const result = await controller.handleIncomingCall();

      expect(result).toEqual(twimlResponse);
    });
  });
});
