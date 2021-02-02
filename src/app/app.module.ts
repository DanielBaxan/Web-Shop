import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialComponentsModule } from './shared/material.module'

import { MainPageComponent } from './main-page/main-page.component'
import { AutoOpenMenuComponent } from './shared/components/auto-open-menu/auto-open-menu.component'
import { LangButtonComponent } from './shared/lang-button/lang-button.component'

@NgModule({
  declarations: [AppComponent, MainPageComponent, AutoOpenMenuComponent, LangButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
