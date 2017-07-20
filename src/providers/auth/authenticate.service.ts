import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Http } from '@angular/http'

@Injectable()
export class AuthenticateService {
  protected token_id: string
  protected redirectUrl: string

  constructor(protected router: Router, protected http: Http) {
    this.token_id = 'access_token'
  }

  login(username: string, password: string): boolean {
    localStorage.setItem(this.token_id, 'ispot-token')

    return true
  }

  logout(): void {
    localStorage.removeItem(this.token_id)

    this.router.navigate(['login'])
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.token_id)
  }

  token(): string {
    return localStorage.getItem(this.token_id) || ''
  }

  redirectTo(url: string) {
    this.redirectUrl = url
  }
}
