import { Component } from '@angular/core'
import { Options } from '@angular-slider/ngx-slider'

export const colors = ['alb', 'negru', 'verde']
export const sizes = ['small', 'medium', 'big']

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filtersOpened = false
  colors = colors
  sizes = sizes
  minValue: number = 1000
  maxValue: number = 4000
  options: Options = {
    floor: 500,
    ceil: 8000
  }

  constructor() {}

  toggleFilters() {
    this.filtersOpened = !this.filtersOpened
  }

  //TODO: implement this
  applyFilters() {}
}
