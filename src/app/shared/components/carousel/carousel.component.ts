import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MainPageService } from 'src/app/main-page/main-page.service'
import { ItemModel } from '../../constants'
import { clickEventExport } from '../item-smallcard/item-smallcard.component'
import { QuickViewComponent } from '../quick-view/quick-view.component'

export const DIFFERENCE = 6

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: Array<ItemModel> = []
  shownItems: Array<ItemModel> = []
  shownItemsIdx = DIFFERENCE

  constructor(
    private mainPageService: MainPageService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.mainPageService.getApi('items/getAllItems').subscribe(data => {
      data.forEach((item: ItemModel) => this.items.push(item))

      for (let i = 0; i < DIFFERENCE; i++) {
        this.shownItems.push(this.items[i])
      }

      // TESTING BLOCK
      // this.items.push(data[1])
      // this.items.push(data[3])
      // this.items.push(data[1])
      // this.items.push(data[5])
      // this.items.push(data[4])
      // this.items.push(data[2])
      // this.items.push(data[4])
      // this.items.push(data[5])
      // this.items.push(data[2])
      // this.items.push(data[3])
      // this.items.push(data[0])
      // this.items.push(data[1])
      // this.items.push(data[5])
      // this.items.push(data[0])
      // this.items.push(data[3])
      // this.items.push(data[4])
      // this.items.push(data[5])
    })
  }

  // Reset the index to the first item of previous set of items and then adds those
  onPreviousClick() {
    for (let i = DIFFERENCE - 1; i >= 0; i--) {
      if (this.shownItemsIdx === 0) {
        this.shownItemsIdx = this.items.length - 1
      }
      this.shownItems[i] = this.items[this.shownItemsIdx]
      this.shownItemsIdx--
    }
    console.log('previous clicked, new showItems are: ', this.shownItems)
  }

  onNextClick() {
    for (let i = 0; i < DIFFERENCE; i++) {
      if (this.shownItemsIdx === this.items.length - 1) {
        this.shownItemsIdx = 0
      }
      this.shownItems[i] = this.items[this.shownItemsIdx]
      this.shownItemsIdx++
    }
    console.log('next clicked, new showItems are: ', this.shownItems)
  }

  smallCardPressed(itemId: clickEventExport): void {
    if (['quickView', 'image'].includes(itemId.part.toString())) {
      const dialogRef = this.matDialog.open(QuickViewComponent, {
        width: 'auto',
        data: '' + itemId.itemId
      })
    }
  }
}
