import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  template:
    '<div class="sticky"><app-top-header></app-top-header><app-main-header></app-main-header><app-nav-header></app-nav-header></div>',
  styles: ['.sticky { position: fixed; top: 0px; z-index: 2; width:100% }']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
