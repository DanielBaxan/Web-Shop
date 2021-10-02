import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {
  sentLink = false
  constructor() {}

  ngOnInit(): void {}

  resetPassword() {
    this.sentLink = true
  }
}
