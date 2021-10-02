import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthComponent } from 'src/app/auth/auth.component'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnDestroy {
  totalPrice = 0
  totalPrice$: Subscription
  routerMatDialog$ = new Subscription()
  constructor(
    private cartService: CartService,
    private matDialog: MatDialog,
    private router: Router
  ) {
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
    this.routerMatDialog$.unsubscribe()
  }

  toggleCartPriceUpdate() {
    this.cartService.getTotalPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice
    })
  }

  testIncrement() {
    this.cartService.testIncrement()
  }

  openAuthDialog() {
    const dialogRef = this.matDialog.open(AuthComponent)
    this.routerMatDialog$ = this.router.events.subscribe(() => {
      // subscribe to close after routing
      dialogRef.close()
    })
  }
}
