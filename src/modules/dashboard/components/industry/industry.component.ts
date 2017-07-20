import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-industry',
  templateUrl: 'industry.component.html',
  providers: [MetricsService]
})
export class DashboardIndustryComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() {
    
  }
}
