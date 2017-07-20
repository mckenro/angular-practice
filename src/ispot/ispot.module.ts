import { NgModule } from '@angular/core'
import { Router } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { LayoutModule } from '../modules/layout/layout.module'
import { SystemModule } from '../modules/system/system.module'
import { LoginModule } from '../modules/login/login.module'
import { DashboardModule } from '../modules/dashboard/dashboard.module'
import { LegalModule } from '../modules/legal/legal.module'

import { HttpService } from '../providers/http.service'
import { AuthenticateService } from '../providers/auth/authenticate.service'
import { AuthGuardService } from '../providers/auth/guard.service'

import { IspotComponent } from './ispot.component'

@NgModule({
  providers: [
    AuthenticateService,
    AuthGuardService,
    HttpService,
  ],
  declarations: [
    IspotComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    LayoutModule,
    LegalModule,
    DashboardModule,
    LoginModule,
    SystemModule,
  ],
  bootstrap: [
    IspotComponent,
  ],
})
export class IspotModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2))
  }
}
