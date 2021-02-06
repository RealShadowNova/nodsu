import { Requester } from '../Requester';
import { GameMode, User } from '../Types';

export class UserComponent {
  private readonly api: Requester;

  constructor(api: Requester) {
    this.api = api;
  }

  async getSelf(accessToken: string, mode?: GameMode): Promise<User> {
    let data: User = await this.api.get(`/me${mode ? `/${mode}` : ''}`, accessToken);

    data.last_visit = new Date(data.last_visit + 'GMT');
    data.join_date = new Date(data.join_date + 'GMT');

    return Promise.resolve(data);
  }
}