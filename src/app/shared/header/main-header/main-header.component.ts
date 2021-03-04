import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnDestroy {
  totalPrice = 0
  totalPrice$: Subscription
  constructor(private cartService: CartService) {
    console.log('Const')
    this.totalPrice$ = this.cartService.totalPriceObservable.subscribe(
      totalPrice => {
        this.totalPrice = totalPrice
        console.log(totalPrice)
      }
    )
    console.log('End')
  }

  ngOnDestroy(): void {
    this.totalPrice$.unsubscribe()
  }

  toggleCartPriceUpdate() {
    this.cartService.getTotalPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice
    })
  }

  testIncrement() {
    this.cartService.testIncrement()
  }
}
