import { NgModule } from '@angular/core'
import { NgSelect2Module } from 'ng-select2'
import { CommonModule } from '@angular/common'
import { CategoriesComponent } from './categories.component'
import { RouterModule } from '@angular/router'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'
import { MaterialComponentsModule } from '../shared/material.module'
import { FilterComponent } from './filter/filter.component'
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { SideNavComponent } from './side-nav/side-nav.component'
import { categoriesRoutes } from './categories.routes'
import { SharedModule } from '../shared/shared.module'
import { NgSelectModule } from '@ng-select/ng-select'

@NgModule({
  declarations: [CategoriesComponent, FilterComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    HeaderModule,
    FooterModule,
    MaterialComponentsModule,
    NgxSliderModule,
    SharedModule,
    NgSelect2Module,
    NgSelectModule
  ]
})
export class CategoriesModule {}
