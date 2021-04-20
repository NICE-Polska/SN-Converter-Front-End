import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomerFormComponent} from './add-customer-form/add-customer-form.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {SerialNumberGenerateComponent} from './serial-number-generate/serial-number-generate.component';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [
  {path: '', component: SearchFormComponent},
  {path: 'add-customer', component: AddCustomerFormComponent},
  {path: 'add-customer', component: AddCustomerFormComponent},
  {path: 'search-form', component: SearchFormComponent},
  {path: 'add-number', component: SerialNumberGenerateComponent},
  {path: 'search-result', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
