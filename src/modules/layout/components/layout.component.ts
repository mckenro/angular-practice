import { Component, OnInit } from '@angular/core'
import { AuthenticateService } from '../../../providers/auth/authenticate.service'

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  providers: [AuthenticateService]
})
export class LayoutComponent implements OnInit {
  protected authService: AuthenticateService
  constructor(authService: AuthenticateService) {
    this.authService = authService
  }

  ngOnInit() {}

  logoutClicked() {
    this.authService.logout()
  }
}
