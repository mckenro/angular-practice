import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-engagement',
  templateUrl: 'engagement.component.html',
})
export class DashboardEngagementComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }
}
