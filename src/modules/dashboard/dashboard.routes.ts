import { RouterModule } from '@angular/router'

import { AuthGuardService } from '../../providers/auth/guard.service'

import { DashboardHomeComponent } from './components/home/home.component'
import { DashboardIndustryComponent } from './components/industry/industry.component'
import { DashboardNetworkComponent } from './components/network/network.component'
import { DashboardShowComponent } from './components/show/show.component'
import { DashboardSpotComponent } from './components/spot/spot.component'
import { DashboardBrandComponent } from './components/brand/brand.component'
import { DashboardChartComponent } from './components/chart/chart.component'

export const DashboardRoutes = RouterModule.forRoot([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard/brand/overview',
    component: DashboardBrandComponent
  },

  {
    path: 'dashboard/spot/overview',
    component: DashboardSpotComponent
  },
  {
    path: 'dashboard/network/overview',
    component: DashboardNetworkComponent
  },
  {
    path: 'dashboard/show/overview',
    component: DashboardShowComponent
  },
  {
    path: 'dashboard/industry/overview',
    component: DashboardIndustryComponent
  },
  {
    path: 'dashboard/chart',
    component: DashboardChartComponent
  },
])
