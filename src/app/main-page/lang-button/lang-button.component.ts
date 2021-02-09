import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Lang, languageList } from '../../shared/constants'

@Component({
  selector: 'app-lang-button',
  templateUrl: './lang-button.component.html',
  styleUrls: ['./lang-button.component.scss']
})
export class LangButtonComponent implements OnInit {
  @Input() siteLanguage = 'en'
  @Output() changeLanguage = new EventEmitter<string>()
  public langList = languageList
  constructor() {}

  ngOnInit(): void {}

  onClick(lan: Lang): void {
    this.changeLanguage.emit(lan.code)
  }
}
