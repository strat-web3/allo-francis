import { Test, TestingModule } from '@nestjs/testing';
import { TwilioModule } from './twilio.module';
import { TwilioController } from './twilio.controller';
import { TwilioService } from './twilio.service';

describe('TwilioModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [TwilioModule],
    }).compile();
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have TwilioController', () => {
    const controller = module.get<TwilioController>(TwilioController);
    expect(controller).toBeDefined();
  });

  it('should have TwilioService', () => {
    const service = module.get<TwilioService>(TwilioService);
    expect(service).toBeDefined();
  });
});
