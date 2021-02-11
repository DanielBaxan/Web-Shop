import { Component, OnInit } from '@angular/core'
import { clickEventExport } from '../shared/components/item-smallcard/item-smallcard.component'
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
  public testItems: Array<ItemModel> = [
    {
      id: '1',
      name: 'Test',
      price: 55.12,
      size: 33,
      color: 'green',
      imageSrc: 'assets/temp/tempItemsIMG/image1.jpg'
    },
    {
      id: '2',
      name: 'Best',
      price: 550,
      size: 13,
      color: 'gri',
      imageSrc: 'assets/temp/tempItemsIMG/image2.jpg'
    },
    {
      id: '3',
      name: 'rest-mode',
      price: 0.12,
      size: 11,
      color: 'Yellow',
      imageSrc: 'assets/temp/tempItemsIMG/image3.jpg'
    }
  ]

  public categories: Array<Category> = []
  constructor(private mainPageService: MainPageService) {}

  ngOnInit(): void {
    this.mainPageService.getApi('categories/getAll').subscribe(data => {
      data.forEach((cat: Category) => {
        this.categories.push(cat)
      })
    })
  }

  smallCardPressed(itemId: clickEventExport): void {
    console.log('🚀 ~ selected item ID =', itemId)
  }
}
