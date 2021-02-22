import { Component, Inject, Input, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MainPageService } from 'src/app/main-page/main-page.service'
import { ItemModel } from '../../constants'

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  public loading = true
  public item: ItemModel = {}
  constructor(
    @Inject(MAT_DIALOG_DATA) public itemId: string,
    private mainPageService: MainPageService
  ) {}

  ngOnInit(): void {
    this.mainPageService
      .getApi(`items/getItem/${this.itemId}`)
      .subscribe(item => {
        this.item = item
        this.loading = false
      })
  }
}
