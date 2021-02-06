import { Requester } from './Requester';
import { UserComponent } from './components/User';

export class Client {
  private readonly accessToken?: string;
  readonly requester: Requester;

  public user: UserComponent;

  constructor(accessToken?: string) {
    this.accessToken = accessToken;
    this.requester = new Requester(this.accessToken);

    this.user = new UserComponent(this.requester);
  }
}