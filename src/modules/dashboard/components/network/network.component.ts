import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-network',
  templateUrl: 'network.component.html',
  providers: [MetricsService]
})
export class DashboardNetworkComponent implements OnInit {
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }
}
