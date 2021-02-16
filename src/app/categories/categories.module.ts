import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CategoriesComponent } from './categories.component'
import { RouterModule } from '@angular/router'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'
import { MaterialComponentsModule } from '../shared/material.module'
import { FilterComponent } from './filter/filter.component'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SideNavComponent } from './side-nav/side-nav.component'

@NgModule({
  declarations: [CategoriesComponent, FilterComponent, SideNavComponent],
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
    MaterialComponentsModule,
    NgxSliderModule
  ]
})
export class CategoriesModule {}
