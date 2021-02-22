import { Component, ElementRef, Input, OnInit } from '@angular/core'
@Component({
  selector: 'app-price-show',
  templateUrl: './price-show.component.html',
  styleUrls: ['./price-show.component.scss']
})
export class PriceShowComponent implements OnInit {
  @Input('itemPrice') price: number | undefined = 0
  @Input('discountedPrice') discountedPrice: number | undefined = 0

  constructor(public element: ElementRef) {}
  ngOnInit(): void {
    console.log(
      'ELRef=',
      this.discountedPrice,
      this.discountedPrice === undefined || this.discountedPrice === 0
    )
  }
}
