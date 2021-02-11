import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TrackOrderComponent } from './track-order.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [TrackOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrackOrderComponent
      }
    ])
  ]
})
export class TrackOrderModule {}
