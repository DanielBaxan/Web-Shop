import { Component, OnInit } from '@angular/core'

const facebookUrl = 'https://www.facebook.com/denimisourworld/'
const instagramUrl = 'https://www.instagram.com/guess_moldova/'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public siteLang = 'En'
  constructor() {}

  changeLanguage(ev: string): void{
    this.siteLang = ev
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
