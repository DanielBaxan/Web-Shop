/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NgModule } from '@angular/core'
import { NgSelect2Module } from 'ng-select2'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { QuickViewComponent } from './shared/components/quick-view/quick-view.component'
import { LoaderComponent } from './shared/components/loader/loader.component'
import { PriceShowComponent } from './shared/components/price-show/price-show.component'
import { SizeShowComponent } from './shared/components/size-show/size-show.component'
import { ColorShowComponent } from './shared/components/color-show/color-show.component'
import { SharedModule } from './shared/shared.module'
import { FormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select'

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    QuickViewComponent,
    PriceShowComponent,
    SizeShowComponent,
    ColorShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgSelect2Module,
    NgSelectModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
