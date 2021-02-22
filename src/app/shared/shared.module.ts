import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router'
import { ItemSmallCardComponent } from './components/item-smallcard/item-smallcard.component'
import { MaterialComponentsModule } from './material.module'

@NgModule({
  declarations: [ItemSmallCardComponent],
  imports: [MaterialComponentsModule],
  exports: [CommonModule, TranslateModule, RouterModule, ItemSmallCardComponent]
})
export class SharedModule {}
