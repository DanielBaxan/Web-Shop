import { Component } from '@angular/core'
import { ItemsList } from '@ng-select/ng-select/lib/items-list'
import { element } from 'protractor'
import { categories } from '../../shared/constants'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  categories = categories
  arrow = 'arrow'
  arrow2 = 'arrow-down'
    submit() {
        if(this.arrow== 'arrow-rotate') {
          this.arrow = 'arrow';
        } else {
          this.arrow = 'arrow-rotate';
        }
    }
    submit2() {
      if(this.arrow2== 'arrow-rotate2') {
        this.arrow2 = 'arrow-down';
      } else {
        this.arrow2= 'arrow-rotate2';
      }
  }

 
  
  
  
  
  
  

  constructor() {}
}
