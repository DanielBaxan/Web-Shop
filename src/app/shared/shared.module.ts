import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router'
import { ItemSmallCardComponent } from './components/item-smallcard/item-smallcard.component'
import { MaterialComponentsModule } from './material.module'
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
  declarations: [ItemSmallCardComponent, LoaderComponent],
  imports: [MaterialComponentsModule, CommonModule],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ItemSmallCardComponent,
    LoaderComponent
  ]
})
export class SharedModule {}
