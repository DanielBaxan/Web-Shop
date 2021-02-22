import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialComponentsModule } from '../shared/material.module'
import { MainPageComponent } from './main-page.component'
import { CategoriesCardComponent } from './categories-card/categories-card.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FooterModule } from '../shared/footer/footer.module'
import { ItemSmallCardComponent } from '../shared/components/item-smallcard/item-smallcard.component'
import { HeaderModule } from '../shared/header/header.module'
import { ScrollBtnComponent } from './scroll-btn/scroll-btn.component'
import { CarouselComponent } from '../shared/components/carousel/carousel.component'

@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesCardComponent,
    ScrollBtnComponent,
    CarouselComponent
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
    FooterModule,
    HeaderModule
  ]
})
export class MainPageModule {}
