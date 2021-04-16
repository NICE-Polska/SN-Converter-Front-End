import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerialNumberGenerateService {

  baseApiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  saveFile(file): Observable<MediaRootObject> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<MediaRootObject>(this.baseApiUrl + '/media/ocr', formData);
  }

  test(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'media/test');
  }
}

export interface MediaData {
  serialNumber: string;
}

export interface MediaRootObject {
  status: string;
  data: MediaData;
}
