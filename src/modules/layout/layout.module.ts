import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { DashboardModule } from '../dashboard/dashboard.module'

import { LayoutComponent } from './components/layout.component'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    DashboardModule,
  ],
  exports: [
    LayoutComponent,
  ],
  declarations: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
