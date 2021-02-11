import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterBenefitsComponent } from './register-benefits.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [RegisterBenefitsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterBenefitsComponent
      }
    ])
  ]
})
export class RegisterBenefitsModule {}
