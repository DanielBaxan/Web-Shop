import { Component, OnInit } from '@angular/core'

export const MenuItems = [
  'panou control',
  'comenzi',
  'adrese',
  'detalii cont',
  'wishlist',
  'dezautentificare'
]

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  menuItems = MenuItems
  currentPage = 'panou control'

  constructor() {}

  ngOnInit(): void {}
}
