import { Routes } from '@angular/router'
import { MyAccountComponent } from './my-account.component'

export const myAccountRoutes: Routes = [
  {
    path: 'track-order',
    loadChildren: () =>
      import('./track-order/track-order.module').then(m => m.TrackOrderModule)
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then(m => m.WishlistModule)
  },
  {
    path: '',
    component: MyAccountComponent
  }
]
