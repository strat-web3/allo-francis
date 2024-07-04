import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { TwilioModule } from '../src/twilio.module';
import { TwilioService } from '../src/twilio.service';

describe('TwilioController (e2e)', () => {
  let app: any;
  let twilioService: TwilioService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TwilioModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    twilioService = moduleFixture.get<TwilioService>(TwilioService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/webhook/twilio/incoming-call (POST)', () => {
    // Ensure correct route definition
    it('should return a TwiML response', async () => {
      const twimlResponse: string = `
        <Response>
          <Say>Hello! This is Francis. I promise I will help you someday.</Say>
        </Response>
      `;
      jest
        .spyOn(twilioService, 'handleIncomingCall' as any)
        .mockResolvedValue(twimlResponse);

      const response = await request(app.getHttpServer())
        .post('/webhook/twilio/incoming-call') // Use the correct endpoint
        .expect(201); // Update expectation to expect 201 Created

      expect(response.text).toEqual(twimlResponse);
    });
  });
});
