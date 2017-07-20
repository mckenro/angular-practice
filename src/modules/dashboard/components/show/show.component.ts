import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-show',
  templateUrl: 'show.component.html',
  providers: [MetricsService]
})
export class DashboardShowComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }
}
