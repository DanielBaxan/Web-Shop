import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialComponentsModule } from '../shared/material.module'

import { MainPageComponent } from './main-page.component'
import { AutoOpenMenuComponent } from './auto-open-menu/auto-open-menu.component'
import { LangButtonComponent } from './lang-button/lang-button.component'
import { CategoriesCardComponent } from './categories-card/categories-card.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FooterModule } from '../shared/footer/footer.module'

@NgModule({
  declarations: [
    MainPageComponent,
    AutoOpenMenuComponent,
    LangButtonComponent,
    CategoriesCardComponent
  ],
  imports: [
    MaterialComponentsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent
      }
    ]),
    MDBBootstrapModule.forRoot(),
    SharedModule,
    FooterModule
  ]
})
export class MainPageModule {}
