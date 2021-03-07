import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyAccountComponent } from './my-account.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { myAccountRoutes } from './my-account.routes'
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component'
import { HeaderModule } from '../shared/header/header.module'
import { FooterModule } from '../shared/footer/footer.module'

@NgModule({
  declarations: [MyAccountComponent, NavMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(myAccountRoutes),
    HeaderModule,
    FooterModule
  ]
})
export class MyAccountModule {}
