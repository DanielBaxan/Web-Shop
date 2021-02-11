import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyAccountComponent } from './my-account.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { myAccountRoutes } from './my-account.routes'

@NgModule({
  declarations: [MyAccountComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(myAccountRoutes)]
})
export class MyAccountModule {}
