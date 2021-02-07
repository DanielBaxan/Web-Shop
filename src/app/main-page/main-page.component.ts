import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { environment } from '../../environments/environment'
import { MainPageService } from './main-page.service'

const facebookUrl = 'https://www.facebook.com/denimisourworld/'
const instagramUrl = 'https://www.instagram.com/guess_moldova/'

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
  constructor(
    private translateService: TranslateService,
    private mainPageService: MainPageService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('ro')

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use(environment.defaultLanguage || 'ro')
  }

  changeLanguage(ev: string): void {
    this.siteLang = ev
    this.translateService.use(ev)
  }

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

  goToUrl(website: string): void {
    switch (website) {
      case 'facebook': {
        window.open(facebookUrl, '_blank')
        break
      }
      case 'instagram': {
        window.open(instagramUrl, '_blank')
        break
      }
    }
  }
}
