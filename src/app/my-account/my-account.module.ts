import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { myAccountRoutes } from './my-account.routes'
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'
import { ControlPanelComponent } from './main-menu/control-panel/control-panel.component'
import { OrdersComponent } from './main-menu/orders/orders.component'
import { EditAddressComponent } from './main-menu/edit-address/edit-address.component'
import { EditAccountComponent } from './main-menu/edit-account/edit-account.component'
import { LogoutComponent } from './main-menu/logout/logout.component'
import { WishlistComponent } from './main-menu/wishlist/wishlist.component'

@NgModule({
  declarations: [
    NavMenuComponent,
    OrdersComponent,
    EditAddressComponent,
    EditAccountComponent,
    LogoutComponent,
    WishlistComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(myAccountRoutes),
    HeaderModule,
    FooterModule
  ]
})
export class MyAccountModule {}
