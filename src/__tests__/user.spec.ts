import { Client } from '../index';

describe('user.getSelf()', () => {
  test('expect no access token provided error', async () => {
    const client = new Client();

    await expect(client.user.getSelf('')).rejects.toThrowError('an access token must be provided');
  });

  test('invalid api token', async () => {
    const client = new Client();

    await expect(client.user.getSelf('1234')).rejects.toThrowError('an invalid token was provided');
  });
});