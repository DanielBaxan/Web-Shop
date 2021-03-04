import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { ItemModel } from '../constants'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<ItemModel> = []
  totalPrice = 0
  public totalPriceObservable: Subject<number>

  constructor() {
    this.totalPriceObservable = new Subject<number>()
    this.setTotalPrice(this.totalPrice)
  }

  addToCart(product: ItemModel) {
    if (product.price !== undefined) {
      this.items.push(product)
      this.totalPrice += 100
    }
  }

  testIncrement() {
    this.totalPrice += 100
    this.setTotalPrice(this.totalPrice)
    console.log(
      '🚀 ~ file: main-header.component.ts ~ line 19 ~ MainHeaderComponent ~ toggleCartPriceUpdate ~ this.totalPrice',
      this.totalPrice
    )
  }

  clearCart() {
    this.items = []
    this.totalPrice = 0
    this.setTotalPrice(0)
    return this.items
  }

  getItems() {
    return this.items
  }

  getTotalPrice(): Observable<number> {
    return this.totalPriceObservable.asObservable()
  }

  setTotalPrice(newValue: number): void {
    this.totalPriceObservable.next(newValue)
  }
}
