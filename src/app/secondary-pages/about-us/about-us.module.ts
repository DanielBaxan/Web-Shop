import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutUsComponent } from './about-us.component'
import { SharedModule } from '../../shared/shared.module'
import { RouterModule } from '@angular/router'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { FooterModule } from 'src/app/shared/footer/footer.module'

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsComponent
      }
    ])
  ]
})
export class AboutUsModule {}
