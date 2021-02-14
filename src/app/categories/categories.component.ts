import { Component } from '@angular/core'

const sortingOptions = [
  'popularitate',
  'cele mai recente',
  'preț: de la mic la mare',
  'preț: de la mare la mic'
]

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  defaultSort = 'Sortează după cele mai recente'
  maxResults = 373
  currentMaxResults = 12
  sortings = sortingOptions
  constructor() {}
}
