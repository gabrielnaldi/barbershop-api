import { Client } from './client';

describe('Client entitie', () => {
  it('should create a client', () => {
    const client = new Client();

    expect(client).toBeTruthy();
  });
});
