import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-airings',
  templateUrl: 'airings.component.html',
  providers: [MetricsService]
})
export class DashboardAiringsComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }
}
