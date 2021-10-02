import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SizeGuideComponent } from './size-guide.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [SizeGuideComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SizeGuideComponent
      }
    ])
  ]
})
export class SizeGuideModule {}
