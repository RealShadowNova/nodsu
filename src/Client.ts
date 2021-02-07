import { Requester } from './Requester';
import { UserComponent } from './components/User';

export class Client {
  /** @internal */
  private readonly accessToken?: string;
  /** @internal */
  private readonly requester: Requester;
  /**
   * User based API methods.
   */
  public user: UserComponent;

  /**
   * 
   * @param accessToken Default access token, recommended use is for client authorization.
   */
  constructor(accessToken?: string) {
    this.accessToken = accessToken;
    this.requester = new Requester(this.accessToken);
    
    this.user = new UserComponent(this.requester);
  }
}