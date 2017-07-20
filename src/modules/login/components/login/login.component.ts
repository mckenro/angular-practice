import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthenticateService } from '../../../../providers/auth/authenticate.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  protected router: Router
  protected authService: AuthenticateService
  protected username: string
  protected password: string
  constructor(router: Router, authService: AuthenticateService) {
    this.router = router
    this.authService = authService
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([''])
    }
  }

  login(username, password) {
    this.authService.login(username, password)
  }
}
