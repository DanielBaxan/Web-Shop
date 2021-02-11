import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaqComponent } from './faq.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FaqComponent
      }
    ])
  ]
})
export class FaqModule {}
