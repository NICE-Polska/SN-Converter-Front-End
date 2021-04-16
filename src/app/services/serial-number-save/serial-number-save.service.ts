import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerialNumberSaveService {

  baseApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerRootObject> {
    return this.http.get<CustomerRootObject>(this.baseApiUrl + '/customers/');
  }

  saveFile(file): Observable<MediaRootObject> {

    const formData = new FormData();
    formData.append('file', file, file.name);
    // @ts-ignore
    return this.http.post(this.baseApiUrl + '/media', formData);
  }

  saveDevice(device): Observable<any> {
    return this.http.post(this.baseApiUrl + '/devices', device); //TODO zamienic any na typ zwracany we wszystkich serwisach
  }

  /*saveDevice(): Observable<DeviceRootObject> {
    // @ts-ignore
    //return this.http.post(this.baseApiUrl + '/devices', this.device);
  }*/
}

export interface CustomersData {
  id: number;
  name: string;
  idax: string;
}

export interface CustomerRootObject {
  status: string;
  data: CustomersData[];
}

export interface MediaData {
  id: number;
}

export interface MediaRootObject {
  message: string;
  data: MediaData;
  location: string;
}

export interface Customer {
  id: number;
}

export interface Media {
  id: number;
}

export interface DeviceRootObject {
  customer: Customer;
  dateOfShipment: string;
  media: Media;
  name: string;
  serialNumber: string;
  vatId: string;
}
// TODO dodać atrybuty private do pól
