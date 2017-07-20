import { Injectable } from '@angular/core'

import { HttpService } from '../../../providers/http.service'

import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class MetricsService {
  protected httpService: HttpService
  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  totalImpressions() {
    return this.httpService.get('').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }

  averageViewRate() {
    return this.httpService.get('').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }

  tvSpend() {
    return this.httpService.get('').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }

  impressionTypes() {
    return this.httpService.get('').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }

  ratesOfViewing() {
    return this.httpService.get('').map(
      response => response.json(),
      error => {
        console.log(error)
      }
    )
  }
}
