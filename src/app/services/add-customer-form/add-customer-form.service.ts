import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerFormService {

  baseApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  saveCustomer(customer): Observable<any> {
    return this.http.post(this.baseApiUrl + '/customers', customer); //TODO zamienic any na typ zwracany we wszystkich serwisach
  }
}

export interface CustomerAddRootObject {
  name: string;
  idax: string;
}
