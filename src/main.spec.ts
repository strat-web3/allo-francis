import { bootstrap } from './main';
import * as dotenv from 'dotenv';
import { INestApplication } from '@nestjs/common';

describe('Main Bootstrap', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // const mockConfig = jest.spyOn(dotenv, 'config').mockReturnValue(undefined);
    jest.spyOn(dotenv, 'config').mockReturnValue(undefined);

    app = await bootstrap();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('should bootstrap the application successfully', () => {
    expect(app).toBeDefined();
  });

  // TODO: Add more tests as needed to validate specific behaviors
});
