import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule }  from '@angular/forms'

import { LoginComponent } from './components/login/login.component'

import { LoginRoutes } from './login.routes'

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutes,
    FormsModule,
  ],
})
export class LoginModule { }
