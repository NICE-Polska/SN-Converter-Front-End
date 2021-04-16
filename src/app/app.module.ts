import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SerialNumberGenerateComponent} from './serial-number-generate/serial-number-generate.component';
import { SerialNumberSaveComponent } from './serial-number-save/serial-number-save.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorService} from './services/interceptor/interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    NavbarComponent,
    SerialNumberGenerateComponent,
    SerialNumberSaveComponent,
    AddCustomerFormComponent,
    SearchFormComponent,
    MessageModalComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
