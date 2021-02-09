import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  template:
    '<app-footer-widgets></app-footer-widgets><app-footer-nav></app-footer-nav><app-footer-bottom></app-footer-bottom>'
})
export class FooterComponent {
  constructor() {}
}
