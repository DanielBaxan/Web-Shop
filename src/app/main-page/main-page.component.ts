import { Component, OnInit } from '@angular/core'
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
  // public categories = [
  //   {
  //     name: 'Femei',
  //     image: 'assets/temp/Category-1.jpg',
  //     cardWidth: '300px'
  //   },
  //   {
  //     name: 'Bărbați',
  //     image: 'assets/temp/Category-2.jpg',
  //     cardWidth: '300px'
  //   },
  //   {
  //     name: 'Copii',
  //     image: 'assets/temp/Category-3.jpg',
  //     cardWidth: '300px'
  //   },
  //   {
  //     name: 'COlecție nouă',
  //     image: 'assets/temp/Category-4.jpg',
  //     cardWidth: '300px'
  //   }
  // ]

  public categories: Array<Category> = []
  constructor(private mainPageService: MainPageService) {}

  ngOnInit(): void {
    this.mainPageService.getApi('categories/getAll').subscribe(data => {
      console.log(
        '🚀 ~ file: main-page.component.ts ~ line 57 ~ MainPageComponent ~ this.mainPageService.getApi ~ data',
        data
      )
      data.forEach((cat: Category) => {
        this.categories.push(cat)
      })
    })
  }
}
