import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { AuthenticateService } from './auth/authenticate.service'

@Injectable()
export class HttpService {
  protected baseUrl: string
  protected httpService: Http
  protected authService: AuthenticateService

  constructor(httpService: Http, authService: AuthenticateService) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
    this.httpService = httpService
    this.authService = authService
  }

  public get(uri: string) {
    return this.httpService.get(this.createEndpoint(uri), {
      headers: this.headers()
    })
  }

  public post(uri: string) {
    return this.httpService.post(this.createEndpoint(uri), {
      headers: this.headers()
    })
  }

  protected createEndpoint(uri: string): string {
    return this.baseUrl + uri
  }

  protected headers() {
    const headers = new Headers()
    const token   = this.authService.token()

    if (token) {
      headers.append('Authorization', 'Bearer ' + token)
    }

    return headers
  }
}
