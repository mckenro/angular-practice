import { Injectable } from '@angular/core'
import { HttpService } from '../../../providers/http.service'

@Injectable()
export class ChartService {
  protected httpService: HttpService

  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  donutChart() {
    return this.httpService.get('/users/10').subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }
}
