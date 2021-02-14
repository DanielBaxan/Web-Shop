import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CategoriesComponent } from './categories.component'
import { RouterModule } from '@angular/router'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'
import { MaterialComponentsModule } from '../shared/material.module'

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesComponent
      }
    ]),
    HeaderModule,
    FooterModule,
    MaterialComponentsModule
  ]
})
export class CategoriesModule {}
