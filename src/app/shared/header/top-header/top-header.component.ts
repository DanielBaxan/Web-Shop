import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

const facebookUrl = 'https://www.facebook.com/denimisourworld/'
const instagramUrl = 'https://www.instagram.com/guess_moldova/'

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent {
  public siteLang = 'ro'

  constructor(private translateService: TranslateService) {}

  changeLanguage(ev: string): void {
    this.siteLang = ev
    this.translateService.use(ev)
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
