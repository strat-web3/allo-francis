export class TwilioMock {
  calls = {
    create: jest.fn(),
  };
}

export default function twilio(): TwilioMock {
  return new TwilioMock() as any;
}
