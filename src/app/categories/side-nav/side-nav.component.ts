import { Component } from '@angular/core'
import { categories } from '../../shared/constants'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  categories = categories

  constructor() {}
}
