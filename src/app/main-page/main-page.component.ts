import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import {environment} from '../../environments/environment'

const facebookUrl = 'https://www.facebook.com/denimisourworld/'
const instagramUrl = 'https://www.instagram.com/guess_moldova/'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public siteLang = 'ro'
  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('ro')

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use(environment.defaultLanguage || 'ro')
  }

  changeLanguage(ev: string): void {
    this.siteLang = ev
    this.translateService.use(ev)
  }

  ngOnInit(): void {}

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
