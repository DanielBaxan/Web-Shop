import { Component, OnInit } from '@angular/core'
import { Options } from '@angular-slider/ngx-slider'
import { NONE_TYPE } from '@angular/compiler'



export const colors = ['Alb', 'Negru', 'Verde']
export const sizes = ['Small', 'Medium', 'Big']

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{
  filtersOpened = false
  colors = colors
  sizes = sizes
  minValue: number = 1000 
  maxValue: number = 4000
  options = {
    floor: 500,
    ceil: 8000
  };



constructor() {}

toggleFilters() {
  this.filtersOpened = !this.filtersOpened
}

//TODO: implement this
applyFilters() {}
}
