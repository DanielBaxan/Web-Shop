import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactComponent } from './contact.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ])
  ]
})
export class ContactModule {}
