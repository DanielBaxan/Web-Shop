import { KeyValue } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'

export enum NavMenuItems {
  'orders' = 'comenzi',
  'edit-address' = 'adrese',
  'edit-account' = 'detalii cont',
  'wishlist' = 'wishlist',
  'logout' = 'dezautentificare'
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  menuItems = NavMenuItems
  @Input() currentPage: string = ''

  constructor() {}

  ngOnInit(): void {}

  unsorted(): number {
    return 0
  }
}
