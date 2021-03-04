import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartPageComponent } from './cart-page/cart-page.component'
import { RouterModule } from '@angular/router'
import { cartRoutes } from './cart.routes'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    HeaderModule,
    FooterModule
  ]
})
export class CartModule {}
