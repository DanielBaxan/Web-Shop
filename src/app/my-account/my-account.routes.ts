import { Routes } from '@angular/router'
import { EditAccountComponent } from './main-menu/edit-account/edit-account.component'
import { EditAddressComponent } from './main-menu/edit-address/edit-address.component'
import { LogoutComponent } from './main-menu/logout/logout.component'
import { OrdersComponent } from './main-menu/orders/orders.component'
import { WishlistComponent } from './main-menu/wishlist/wishlist.component'
import { ControlPanelComponent } from './main-menu/control-panel/control-panel.component'

export const myAccountRoutes: Routes = [
  {
    path: 'track-order',
    loadChildren: () =>
      import('./track-order/track-order.module').then(m => m.TrackOrderModule)
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'lost-password',
    loadChildren: () =>
      import('./lost-password/lost-password.module').then(
        m => m.LostPasswordModule
      )
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'edit-address',
    component: EditAddressComponent
  },
  {
    path: 'edit-account',
    component: EditAccountComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: ControlPanelComponent
  }
]
