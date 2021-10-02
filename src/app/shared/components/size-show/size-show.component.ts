import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-size-show',
  templateUrl: './size-show.component.html',
  styleUrls: ['./size-show.component.scss']
})
export class SizeShowComponent {
  @Input() sizes: Array<string> = []
  @Input('message') msg: string = 'no message'
}
