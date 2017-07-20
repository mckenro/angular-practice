import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'
import { ChartService } from '../../services/chart.service'

@Component({
  selector: 'app-dashboard-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MetricsService, ChartService]
})

export class DashboardHomeComponent implements OnInit {
  protected metricsService: MetricsService

  constructor(metricsService: MetricsService) {
    this.metricsService = metricsService
  }

  ngOnInit() { }
}
