import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrivacyPolicyComponent } from './privacy-policy.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { FooterModule } from 'src/app/shared/footer/footer.module'


@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivacyPolicyComponent
      }
    ])
  ]
})
export class PrivacyPolicyModule {}
