import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {
  @Input() categoryName = ''
  @Input() categoryImage = 'assets/temp/Category-1.jpg'
  @Input() cardWidth = '300px'
  constructor() {}

  ngOnInit(): void {}
}
