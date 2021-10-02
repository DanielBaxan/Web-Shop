import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LostPasswordComponent } from './lost-password.component'
import { RouterModule } from '@angular/router'
import { FooterModule } from 'src/app/shared/footer/footer.module'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { MaterialComponentsModule } from 'src/app/shared/material.module'

@NgModule({
  declarations: [LostPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LostPasswordComponent
      }
    ]),
    HeaderModule,
    FooterModule,
    MaterialComponentsModule
  ]
})
export class LostPasswordModule {}
