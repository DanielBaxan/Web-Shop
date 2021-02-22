import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { clickEventExport } from '../shared/components/item-smallcard/item-smallcard.component'
import { QuickViewComponent } from '../shared/components/quick-view/quick-view.component'
import { ItemModel } from '../shared/constants'
import { MainPageService } from './main-page.service'

export interface Category {
  name: string
  imageSrc: string
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public siteLang = 'ro'
  public testItems: Array<ItemModel> = []

  public categories: Array<Category> = []
  constructor(
    private mainPageService: MainPageService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mainPageService.getApi('categories/getAll').subscribe(data => {
      data.forEach((cat: Category) => {
        this.categories.push(cat)
      })
    })
    // this.mainPageService.getApi('items/getAllItems').subscribe(data => {
    //   data.forEach((item: ItemModel) => this.testItems.push(item))
    // })
  }

  // smallCardPressed(itemId: clickEventExport): void {
  //   if (['quickView', 'image'].includes(itemId.part.toString())) {
  //     const dialogRef = this.matDialog.open(QuickViewComponent, {
  //       width: 'auto',
  //       data: '' + itemId.itemId
  //     })
  //   }
  // }
}
