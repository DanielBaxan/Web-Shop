import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./secondary-pages/about-us/about-us.module').then(
        m => m.AboutUsModule
      )
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./secondary-pages/contact/contact.module').then(
        m => m.ContactModule
      )
  },
  {
    path: 'delivery-and-cancellation',
    loadChildren: () =>
      import(
        './secondary-pages/delivery-and-cancellation/delivery-and-cancellation.module'
      ).then(m => m.DeliveryAndCancellationModule)
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./secondary-pages/faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'how-to-order',
    loadChildren: () =>
      import('./secondary-pages/how-to-order/how-to-order.module').then(
        m => m.HowToOrderModule
      )
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./secondary-pages/privacy-policy/privacy-policy.module').then(
        m => m.PrivacyPolicyModule
      )
  },
  {
    path: 'register-benefits',
    loadChildren: () =>
      import(
        './secondary-pages/register-benefits/register-benefits.module'
      ).then(m => m.RegisterBenefitsModule)
  },
  {
    path: 'size-guide',
    loadChildren: () =>
      import('./secondary-pages/size-guide/size-guide.module').then(
        m => m.SizeGuideModule
      )
  },
  {
    path: 'useful-info',
    loadChildren: () =>
      import('./secondary-pages/useful-info/useful-info.module').then(
        m => m.UsefulInfoModule
      )
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
]
