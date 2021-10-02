import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-color-show',
  templateUrl: './color-show.component.html',
  styleUrls: ['./color-show.component.scss']
})
export class ColorShowComponent {
  @Input() colors: Array<string> = ['black', 'blue', 'green', 'yellow', 'red']
  @Input('message') msg: string = 'no message'
}
