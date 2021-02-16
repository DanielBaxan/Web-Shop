import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ItemModel } from '../../constants'

export interface clickEventExport {
  itemId: string
  part: ClickEventPart
}
export enum ClickEventPart {
  heart = 'heart',
  travel = 'travel',
  image = 'image',
  quickView = 'quickView',
  text = 'text'
}
@Component({
  selector: 'app-item-smallcard',
  templateUrl: './item-smallcard.component.html',
  styleUrls: ['./item-smallcard.component.scss']
})
export class ItemSmallCardComponent {
  @Input() wd = 175
  @Input() ht = 175
  @Input() item: ItemModel = { id: '-1', size: '200' }
  @Output() smallCardPressed = new EventEmitter<clickEventExport>()
  public imgPart = ClickEventPart
  constructor() {}

  ngOnInit(): void {
    console.log('item in small=', this.item)
  }

  onSomethingClick(
    ev: Event,
    itemId: string | undefined,
    part: ClickEventPart
  ): void {
    ev.stopPropagation()
    if (itemId !== undefined) {
      this.smallCardPressed.emit({ itemId, part: part })
    }
  }
}
