import { Requester } from '../Requester';

describe('class Requester', () => {
  test('Invalid JSON response', async () => {
    const requester = new Requester();

    await expect(requester.get('/this/does/not/exist', ''))
  });
})