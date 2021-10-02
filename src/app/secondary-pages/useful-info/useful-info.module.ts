import { Component, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsefulInfoComponent } from './useful-info.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { FooterModule } from 'src/app/shared/footer/footer.module'


@NgModule({
  declarations: [
    UsefulInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsefulInfoComponent
      }
    ])
  ]
})
export class UsefulInfoModule {}
