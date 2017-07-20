import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-audience',
  templateUrl: 'audience.component.html',
  providers: [MetricsService]
})
export class DashboardAudienceComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }
}
