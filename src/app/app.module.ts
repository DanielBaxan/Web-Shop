/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialComponentsModule } from './shared/material.module'

import { MainPageComponent } from './main-page/main-page.component'
import { AutoOpenMenuComponent } from './shared/components/auto-open-menu/auto-open-menu.component'
import { LangButtonComponent } from './shared/lang-button/lang-button.component'
import { CategoriesCardComponent } from './shared/components/categories-card/categories-card.component'

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AutoOpenMenuComponent,
    LangButtonComponent,
    CategoriesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
