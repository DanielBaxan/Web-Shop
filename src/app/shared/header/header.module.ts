import { NgModule } from '@angular/core'
import { MaterialComponentsModule } from '../material.module'
import { HeaderComponent } from './header.component'
import { MainHeaderComponent } from './main-header/main-header.component'
import { NavHeaderComponent } from './nav-header/nav-header.component'
import { TopHeaderComponent } from './top-header/top-header.component'
import { AutoOpenMenuComponent } from './auto-open-menu/auto-open-menu.component'
import { LangButtonComponent } from './lang-button/lang-button.component'
import { SharedModule } from '../shared.module'

@NgModule({
  declarations: [
    MainHeaderComponent,
    NavHeaderComponent,
    TopHeaderComponent,
    HeaderComponent,
    AutoOpenMenuComponent,
    LangButtonComponent
  ],
  imports: [MaterialComponentsModule, SharedModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
