import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DeliveryAndCancellationComponent } from './delivery-and-cancellation.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [DeliveryAndCancellationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeliveryAndCancellationComponent
      }
    ])
  ]
})
export class DeliveryAndCancellationModule {}
