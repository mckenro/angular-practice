import { Component, OnInit } from '@angular/core';
 import { ChartService } from '../../services/chart.service'

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [ChartService]
})

export class DashboardChartComponent implements OnInit {
  constructor(protected chartService: ChartService) { }

  ngOnInit() {
    this.chartService.donutChart()
  }

}
