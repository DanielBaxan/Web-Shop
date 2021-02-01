import { Component } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'

@Component({
  selector: 'app-auto-open-menu',
  templateUrl: './auto-open-menu.component.html',
  styleUrls: ['./auto-open-menu.component.scss']
})
export class AutoOpenMenuComponent {
  timedOutCloser: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

  constructor() {}

  mouseEnter(trigger: MatMenuTrigger): void {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser)
    }
    trigger.openMenu()
  }

  mouseLeave(trigger: MatMenuTrigger): void {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu()
    }, 50)
  }
}
