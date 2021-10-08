import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactComponent } from './contact.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { FooterModule } from 'src/app/shared/footer/footer.module'


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ])
  ]
})
export class ContactModule {}
