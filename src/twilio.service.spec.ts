import { Test, TestingModule } from '@nestjs/testing';
import { TwilioService } from './twilio.service';
import * as Twilio from 'twilio';

describe('TwilioService', () => {
  let service: TwilioService;
  let twilioMock: any;

  beforeEach(async () => {
    // Mock Twilio client
    twilioMock = {
      calls: {
        create: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TwilioService,
        { provide: Twilio.Twilio, useValue: twilioMock }, // Provide mocked Twilio client
      ],
    }).compile();

    service = module.get<TwilioService>(TwilioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should make a call with correct parameters', async () => {
    const to = '+1234567890';
    const from = '+0987654321';
    const url = 'http://example.com/twilio/callback';

    await service.makeCall(to, from, url);

    expect(twilioMock.calls.create).toHaveBeenCalledWith({
      to,
      from,
      url,
    });
  });

  it('should handle errors gracefully', async () => {
    // Mock Twilio client to throw an error
    twilioMock.calls.create.mockRejectedValue(new Error('Twilio API Error'));

    await expect(
      service.makeCall(
        '+1234567890',
        '+0987654321',
        'http://example.com/twilio/callback',
      ),
    ).rejects.toThrowError('Twilio API Error');
  });
});
