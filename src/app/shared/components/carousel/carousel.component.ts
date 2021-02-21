import { Component, Input, OnInit } from '@angular/core'
import { MainPageService } from 'src/app/main-page/main-page.service'
import { ItemModel } from '../../constants'
import { clickEventExport } from '../item-smallcard/item-smallcard.component'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: Array<ItemModel> = []
  shownItems: Array<ItemModel> = []
  shownItemsIdx: number = 6

  constructor(private mainPageService: MainPageService) {}

  ngOnInit() {
    this.mainPageService.getApi('items/getAllItems').subscribe(data => {
      data.forEach((item: ItemModel) => this.items.push(item))

      for (let i = 0; i < 6; i++) {
        this.shownItems.push(this.items[i])
      }

      // TESTING BLOCK
      this.items.push(data[1])
      this.items.push(data[3])
      this.items.push(data[1])
      this.items.push(data[5])
      this.items.push(data[4])
      this.items.push(data[2])
      this.items.push(data[4])
      this.items.push(data[5])
      this.items.push(data[2])
      this.items.push(data[3])
      this.items.push(data[0])
      this.items.push(data[1])
      this.items.push(data[5])
      this.items.push(data[0])
      this.items.push(data[3])
      this.items.push(data[4])
      this.items.push(data[5])
    })
  }

  // Reset the index to the first item of previous set of items and then adds those
  onPreviousClick() {
    if (this.shownItems[0] !== this.items[0]) {
      this.shownItemsIdx -= 12
      for (let i = 0; i < 6; i++) {
        this.shownItems[i] = this.items[this.shownItemsIdx]
        this.shownItemsIdx++
      }
    }
    console.log('previous clicked, new showItems are: ', this.shownItems)
  }

  onNextClick() {
    if (this.shownItems[1] !== this.items[this.items.length - 1]) {
      for (let i = 0; i < 6; i++) {
        this.shownItems[i] = this.items[this.shownItemsIdx]
        this.shownItemsIdx++
      }
    }
    console.log('next clicked, new showItems are: ', this.shownItems)
  }

  smallCardPressed(itemId: clickEventExport): void {
    console.log('🚀 ~ selected item ID =', itemId)
  }
}
