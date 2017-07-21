import { Component, OnInit } from '@angular/core'
import { ChartService } from '../../services/chart.service'

import * as d3 from 'd3-selection'
import * as d3Scale from 'd3-scale'
import * as d3Shape from 'd3-shape'

import { Stats } from './shared/data'

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [ChartService]
})

export class DashboardChartComponent implements OnInit {
  protected chartMaker

  title: string = 'D3js Chart with Angular 2'
  subtitle: string = 'Pie Chart'

  private margin = {top: 20, right: 20, bottom: 30, left: 50}
  private width: number
  private height: number
  private radius: number

  private arc: any
  private labelArc: any
  private pie: any
  private color: any
  private svg: any
  constructor(protected chartService: ChartService) {
    this.width = 310 - this.margin.left - this.margin.right
    this.height = 310 - this.margin.top - this.margin.bottom
    this.radius = Math.min(this.width, this.height) / 2
   }

  ngOnInit() {
    this.makeDonut()
    this.initSvg()
    this.drawPie()
  }

  makeDonut() {
    this.chartService.donutChart().subscribe(
      (data) => this.chartMaker = data
    )
  }

  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
                        .range(['#3366CC', '#DC3912', '#FF9900', '#990099', '#109618', '#0099C6', '#DD4477'])
    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(this.radius - 65)
    this.labelArc = d3Shape.arc()
                           .outerRadius(this.radius - 40)
                           .innerRadius(this.radius - 40)
    this.pie = d3Shape.pie()
                      .sort(null)
                      .value((d: any) => d.population)
    this.svg = d3.select('svg')
                 .append('g')
                 .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')')
  }

  private drawPie() {
    const g = this.svg.selectAll('.arc')
                    .data(this.pie(Stats))
                    .enter().append('g')
                    .attr('class', 'arc')
    g.append('path').attr('d', this.arc)
                    .style('fill', (d: any) => this.color(d.data.age) )
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
                    .attr('dy', '.35em')
                    .text((d: any) => d.data.age)
  }

}
