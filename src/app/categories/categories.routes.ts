import { Routes } from '@angular/router'
import { CategoriesComponent } from './categories.component'

export const categoriesRoutes: Routes = [
  {
    path: ':mainCategory',
    children: [
      {
        path: ':category',
        children: [
          { path: ':subCategory', component: CategoriesComponent },
          { path: '', component: CategoriesComponent }
        ]
      },
      { path: '', component: CategoriesComponent }
    ]
  }
]
