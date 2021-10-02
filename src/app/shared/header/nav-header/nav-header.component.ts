import { Component } from '@angular/core'
import { categories, CategoriesInterface } from '../../constants'

export const newArrivalsSubCategories = [
  'haine',
  'încălțăminte',
  'denim',
  'genți',
  'accesorii'
]

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {
  womenCategories: CategoriesInterface[] = []
  menCategories: CategoriesInterface[] = []
  newArrivalsSubCategories = newArrivalsSubCategories

  constructor() {
    categories.forEach(item => {
      if (item.mainCategory === 'FEMEI' && item.categories) {
        item.categories.forEach(cat => {
          if (cat.category !== 'denim') {
            this.womenCategories.push(cat)
          }
        })
      } else if (item.mainCategory === 'BĂRBAȚI' && item.categories) {
        item.categories.forEach(cat => {
          if (cat.category !== 'denim') {
            this.menCategories.push(cat)
          }
        })
      }
    })
  }
}
