import { Component, Input } from '@angular/core'
@Component({
  selector: 'app-price-show',
  templateUrl: './price-show.component.html',
  styleUrls: ['./price-show.component.scss']
})
export class PriceShowComponent {
  @Input('itemPrice') price: number | undefined = 0
  @Input('discountedPrice') discountedPrice: number | undefined = 0
}
