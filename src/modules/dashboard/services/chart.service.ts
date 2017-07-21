import { Injectable } from '@angular/core'
import { HttpService } from '../../../providers/http.service'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/Rx'

@Injectable()
export class ChartService {
  protected httpService: HttpService

  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  donutChart() {
    return this.httpService.get('/users/10').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }
}
