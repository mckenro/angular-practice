import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { DashboardMenuComponent } from './components/menu/menu.component'
import { DashboardHomeComponent } from './components/home/home.component'
import { DashboardBrandComponent } from './components/brand/brand.component'
import { DashboardIndustryComponent } from './components/industry/industry.component'
import { DashboardSpotComponent } from './components/spot/spot.component'
import { DashboardNetworkComponent } from './components/network/network.component'
import { DashboardShowComponent } from './components/show/show.component'
import { DashboardAiringsComponent } from './components/airings/airings.component'
import { DashboardAudienceComponent } from './components/audience/audience.component'
import { DashboardEngagementComponent } from './components/engagement/engagement.component'
import { DashboardChartComponent } from './components/chart/chart.component'

import { DashboardRoutes } from './dashboard.routes'

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardHomeComponent,
    DashboardBrandComponent,
    DashboardIndustryComponent,
    DashboardSpotComponent,
    DashboardNetworkComponent,
    DashboardShowComponent,
    DashboardAiringsComponent,
    DashboardAudienceComponent,
    DashboardEngagementComponent,
    DashboardChartComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutes,
  ],
  exports: [
    DashboardMenuComponent,
  ]
})
export class DashboardModule { }
