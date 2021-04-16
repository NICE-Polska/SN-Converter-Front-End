import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  baseApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDevices(filter, page): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.baseApiUrl + '/devices?filter=' + filter + '&page=' + page); //TODO zamienic any na typ zwracany we wszystkich serwisach
  }
}

export interface DeviceCustomer {
  id: number;
  name: string;
  idax: string;
}

export interface DeviceDatum {
  id: number;
  name: string;
  serialNumber: string;
  image?: any;
  dateOfShipment: number[];
  vatId: string;
  customer: DeviceCustomer;
}

export interface DeviceRootObject {
  status: string;
  data: DeviceDatum[];
  pageNumber: number;
  nextPage: string;
  totalPages: number;
}
