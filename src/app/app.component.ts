import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { environment } from 'src/environments/environment'

const icons = [
  'instagram',
  'facebook',
  'cart',
  'shopping-bag',
  'scroll-arrow'
] as const
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Web-Shop'

  constructor(
    iconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    translateService: TranslateService
  ) {
    icons.forEach(icon => {
      const url = `../assets/svg-icons/${icon}.svg`
      const resourceUrl = domSanitizer.bypassSecurityTrustResourceUrl(url)
      iconRegistry.addSvgIcon(icon, resourceUrl)
    })

    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('ro')

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use(environment.defaultLanguage || 'ro')
  }
}
