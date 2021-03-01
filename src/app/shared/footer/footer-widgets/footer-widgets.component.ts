import { Component } from '@angular/core'
import { MainPageService } from 'src/app/main-page/main-page.service'
import { ItemModel } from '../../constants'

@Component({
  selector: 'app-footer-widgets',
  templateUrl: './footer-widgets.component.html',
  styleUrls: ['./footer-widgets.component.scss']
})
export class FooterWidgetsComponent {
  items: Array<ItemModel> = []
  shownItems: Array<ItemModel> = []
  shownItemsIdx = 0

  constructor(private mainPageService: MainPageService) {
    this.mainPageService.getApi('items/getAllItems').subscribe(data => {
      data.forEach((item: ItemModel) => this.items.push(item))

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

      for (this.shownItemsIdx; this.shownItemsIdx < 4; this.shownItemsIdx++) {
        this.shownItems.push(this.items[this.shownItemsIdx])
      }
    })
  }
}
