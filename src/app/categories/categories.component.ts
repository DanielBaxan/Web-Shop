import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { MainPageService } from '../main-page/main-page.service'
import { clickEventExport } from '../shared/components/item-smallcard/item-smallcard.component'
import { ItemModel } from '../shared/constants'

const sortingOptions = [
  'popularitate',
  'cele mai recente',
  'preț: de la mic la mare',
  'preț: de la mare la mic'
]

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnDestroy {
  defaultSort = 'Sortează după cele mai recente'
  maxResults = 373
  currentMaxResults = 12
  sortings = sortingOptions
  path = ''
  navigation$
  activatedRoute$: Subscription = new Subscription()
  items: Array<ItemModel> = []
  shownItems: Array<ItemModel> = []
  shownItemsIdx = 0
  hideViewMore = false
  loading = true
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainPageService: MainPageService
  ) {
    this.mainPageService.getApi('').subscribe(data => {
      data.forEach((item: ItemModel) => this.items.push(item))

      // TESTING BLOCK
      this.items.push(data[1])
      this.items.push(data[3])
      this.items.push(data[1])
      this.items.push(data[5])
      this.items.push(data[4])
      this.items.push(data[2])
      this.items.push(data[4])
      this.items.push(data[5])
      this.items.push(data[2])
      this.items.push(data[3])
      this.items.push(data[0])
      this.items.push(data[1])
      this.items.push(data[5])
      this.items.push(data[0])
      this.items.push(data[3])
      this.items.push(data[4])
      this.items.push(data[5])

      for (this.shownItemsIdx; this.shownItemsIdx < 6; this.shownItemsIdx++) {
        this.shownItems.push(this.items[this.shownItemsIdx])
      }
      this.loading = false
    })

    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigation$ = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.resetData()
      }
    })
  }

  ngOnDestroy() {
    if (this.navigation$) {
      this.navigation$.unsubscribe()
    }
    if (this.activatedRoute$) {
      this.activatedRoute$.unsubscribe()
    }
  }

  resetData() {
    this.path = 'prima pagină'
    this.activatedRoute$ = this.activatedRoute.params.subscribe(params => {
      let mainCategory = params['mainCategory']
      let category = params['category']
      let subCategory = params['subCategory']

      this.path = this.path + ` / ${mainCategory}`
      if (category !== undefined) {
        this.path = this.path + ` / ${category}`
      }
      if (subCategory !== undefined) {
        this.path = this.path + ` / ${subCategory}`
      }
    })
  }

  smallCardPressed(itemId: clickEventExport): void {
    console.log('🚀 ~ selected item ID =', itemId)
  }

  viewMore() {
    if (this.shownItemsIdx === this.items.length - 1) this.hideViewMore = true
    else {
      for (let i = 0; i < 6; i++) {
        this.shownItems.push(this.items[this.shownItemsIdx])
        this.shownItemsIdx++
      }
    }
  }
}
