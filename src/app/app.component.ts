import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

const icons = ['instagram', 'facebook', 'cart', 'shopping-bag'] as const
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web-Shop'

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    icons.forEach(icon => {
      const url = `../assets/svg-icons/${icon}.svg`
      const resourceUrl = domSanitizer.bypassSecurityTrustResourceUrl(url)
      iconRegistry.addSvgIcon(icon, resourceUrl)
    })
  }
}
