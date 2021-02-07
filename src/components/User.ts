import { Requester } from '../Requester';
import { GameMode, User } from '../Types';

export class UserComponent {
  /** @internal */
  private readonly api: Requester;

  constructor(api: Requester) {
    this.api = api;
  }

  /**
   * Get Self Data
   * 
   * ```
   * Client.user.getSelf('myAccessToken', 'osu');
   * ```
   * @param accessToken The oAuth access token (Cannot be a client grant token).
   * @param mode 
   */
  async getSelf(accessToken: string, mode?: GameMode): Promise<User> {
    let data: User = await this.api.get(`/me${mode ? `/${mode}` : ''}`, accessToken);

    data.last_visit = new Date(data.last_visit + 'GMT');
    data.join_date = new Date(data.join_date + 'GMT');

    return Promise.resolve(data);
  }
}