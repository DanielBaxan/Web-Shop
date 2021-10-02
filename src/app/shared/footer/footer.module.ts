import { NgModule } from '@angular/core'
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component'
import { FooterNavComponent } from './footer-nav/footer-nav.component'
import { FooterWidgetsComponent } from './footer-widgets/footer-widgets.component'
import { FooterComponent } from './footer.component'
import { MaterialComponentsModule } from '../material.module'
import { SharedModule } from '../shared.module'

@NgModule({
  declarations: [
    FooterBottomComponent,
    FooterNavComponent,
    FooterWidgetsComponent,
    FooterComponent
  ],
  imports: [MaterialComponentsModule, SharedModule],
  exports: [FooterComponent]
})
export class FooterModule {}
