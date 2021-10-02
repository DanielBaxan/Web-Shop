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
  angle = 'btndown'
  angle1 = 'btndown'
  angle2 = 'btndown'
  angle3 = 'btndown'
  angle4 = 'btndown'
  arrow0 = 'arrow-down'
  arrow2 = 'arrow-down'
  arrow3 = 'arrow-down'
  arrow4 = 'arrow-down'
  arrow20 = 'arrow-down'
  arrow22 = 'arrow-down'
  arrow23 = 'arrow-down'
  arrow24 = 'arrow-down'
  arrow42 = 'arrow-down'
  arrow43 = 'arrow-down'
  i= 0
  id = 3

    submit() {
        if(this.angle == 'btndown-rotate') {
          this.angle = 'btndown'
        } else {
          this.angle = 'btndown-rotate';
        }
      }

    
    submit10() {
      if(this.arrow0== 'arrow-rotate2') {
        this.arrow0 = 'arrow-down';
      } else {
        this.arrow0= 'arrow-rotate2';
      }
  }
  submit3() {
    if(this.angle1 == 'btndown-rotate') {
      this.angle1 = 'btndown'
    } else {
      this.angle1 = 'btndown-rotate';
    }
  }
  submit4() {
    if(this.angle2 == 'btndown-rotate') {
      this.angle2 = 'btndown'
    } else {
      this.angle2 = 'btndown-rotate';
    }
  }
  submit5() {
    if(this.angle3 == 'btndown-rotate') {
      this.angle3 = 'btndown'
    } else {
      this.angle3 = 'btndown-rotate';
    }
  }
  submit6() {
    if(this.angle4 == 'btndown-rotate') {
      this.angle4 = 'btndown'
    } else {
      this.angle4 = 'btndown-rotate';
    }
  }
  submit12() {
    if(this.arrow2== 'arrow-rotate2') {
      this.arrow2 = 'arrow-down';
    } else {
      this.arrow2= 'arrow-rotate2';
    }
}
submit13() {
  if(this.arrow3== 'arrow-rotate2') {
    this.arrow3 = 'arrow-down';
  } else {
    this.arrow3= 'arrow-rotate2';
  }
}
submit14() {
  if(this.arrow4== 'arrow-rotate2') {
    this.arrow4 = 'arrow-down';
  } else {
    this.arrow4 = 'arrow-rotate2';
  }
}
submit20() {
  if(this.arrow20== 'arrow-rotate2') {
    this.arrow20 = 'arrow-down';
  } else {
    this.arrow20 = 'arrow-rotate2';
  }
}
submit22() {
  if(this.arrow22== 'arrow-rotate2') {
    this.arrow22 = 'arrow-down';
  } else {
    this.arrow22 = 'arrow-rotate2';
  }
}
submit23() {
  if(this.arrow23== 'arrow-rotate2') {
    this.arrow23 = 'arrow-down';
  } else {
    this.arrow23 = 'arrow-rotate2';
  }
}
submit24() {
  if(this.arrow24== 'arrow-rotate2') {
    this.arrow24 = 'arrow-down';
  } else {
    this.arrow24 = 'arrow-rotate2';
  }
}
submit42() {
  if(this.arrow42== 'arrow-rotate2') {
    this.arrow42 = 'arrow-down';
  } else {
    this.arrow42 = 'arrow-rotate2';
  }
}
submit43() {
  if(this.arrow43== 'arrow-rotate2') {
    this.arrow43 = 'arrow-down';
  } else {
    this.arrow43 = 'arrow-rotate2';
  }
}


 
  
  
  
  
  
  

  constructor() {}
}
