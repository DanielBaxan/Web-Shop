import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HowToOrderComponent } from './how-to-order.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [HowToOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HowToOrderComponent
      }
    ])
  ]
})
export class HowToOrderModule {}
