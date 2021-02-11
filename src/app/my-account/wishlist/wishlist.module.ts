import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WishlistComponent } from './wishlist.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WishlistComponent
      }
    ])
  ]
})
export class WishlistModule {}
