import { Component, OnInit } from '@angular/core'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-dashboard-brand',
  templateUrl: 'brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [MetricsService]
})
export class DashboardBrandComponent implements OnInit {
  protected currentDate = new Date()
  protected impressionMetrics
  protected averageMetrics
  protected tvSpendMetrics
  protected impressionsByTypeMetrics
  protected viewingRatesMetrics
  constructor(protected metricsService: MetricsService) { }

  ngOnInit() { }

  impressions() {
    this.metricsService.totalImpressions().subscribe(
      (data) => this.impressionMetrics = data
    )
  }

  industryAverage() {
    this.metricsService.averageViewRate().subscribe(
      (data) => this.averageMetrics = data
    )
  }

  estTvSpend() {
    this.metricsService.tvSpend().subscribe(
      (data) => this.tvSpendMetrics = data
    )
  }

  impressionsByType() {
    this.metricsService.impressionTypes().subscribe(
      (data) => this.impressionsByTypeMetrics = data
    )
  }

  viewRates() {
    this.metricsService.ratesOfViewing().subscribe(
      (data) => this.viewingRatesMetrics = data
    )
  }
}
