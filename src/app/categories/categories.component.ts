import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'

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
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activatedRoute$: Subscription
  ) {
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
}
