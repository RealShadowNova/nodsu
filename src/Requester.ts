import https from 'https';
import qs from 'querystring';

import { ApiError } from './ApiError';

export class Requester {
  private readonly userAgent: string;
  private readonly accessToken?: string;
  private readonly baseUrl: string;
  constructor(accessToken?: string) {
    this.accessToken = accessToken;
    this.userAgent = `nodsu v${require('../package.json').version} (https://github.com/ethamitc/nodsu)`;
    this.baseUrl = 'https://osu.ppy.sh/api/v2';
  }
  get(endpoint: string, accessToken: string, queryParameters?: object): Promise<any> {

    let options = {};

    Object.assign(options, queryParameters || {});

    const url = `${this.baseUrl}${endpoint}?${qs.encode(options)}`;

    const requestOptions: https.RequestOptions = {
      headers: {
        'User-Agent': this.userAgent,
        'Authorization': `Bearer ${accessToken ||  this.accessToken}`
      }
    }

    return new Promise((resolve, reject) => {

      if (!this.accessToken && !accessToken) return reject(new Error('an access token must be provided'));

      https.get(url, requestOptions, (res) => {
        let data = '';

        res.on('data', (chunk) => data += chunk);

        let json;
        res.once('end', () => {
          try {
            json = JSON.parse(data);
          } catch (err) {
            return reject(err);
          }

          if (json.error) {
            return reject(new ApiError(json.error));
          }

          if (res.statusCode == 401) {
            return reject(new ApiError('an invalid token was provided'));
          }

          resolve(json);
        });
      })
    })
  }
}