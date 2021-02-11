import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrivacyPolicyComponent } from './privacy-policy.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivacyPolicyComponent
      }
    ])
  ]
})
export class PrivacyPolicyModule {}
