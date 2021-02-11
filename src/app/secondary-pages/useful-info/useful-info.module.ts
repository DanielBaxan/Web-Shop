import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsefulInfoComponent } from './useful-info.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [UsefulInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsefulInfoComponent
      }
    ])
  ]
})
export class UsefulInfoModule {}
