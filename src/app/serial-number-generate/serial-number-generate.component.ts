import { Component, OnInit } from '@angular/core';
import {MediaRootObject, SerialNumberGenerateService} from '../services/serial-number-generate/serial-number-generate.service';

@Component({
  selector: 'snc-serial-number-generate',
  templateUrl: './serial-number-generate.component.html',
  styleUrls: ['./serial-number-generate.component.css'],
  styles: [`
    .alert.alert-danger {
      font-size: smaller;
    }
  `]
})
export class SerialNumberGenerateComponent implements OnInit {
  loading = false;
  file: File = null;
  mediaRootObject: MediaRootObject = {} as MediaRootObject;
  serialNumber: string;
  public imagePath;
  imgURL: any;
  isError = false;
  errMessage: string;
  popOverDescription: string;

  constructor(private serialNumberGenerateService: SerialNumberGenerateService) {}

  ngOnInit(): void {}

  onChange(event, files) {
    this.file = event.target.files[0];
    if (files.length === 0) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);

    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  onUpload() {
    this.loading = !this.loading;
    this.serialNumber = '';

    this.serialNumberGenerateService.saveFile(this.file).subscribe(response => {
        this.mediaRootObject = response;
        this.serialNumber = this.mediaRootObject.data.serialNumber;
        this.loading = false;
    },
      error => {
      this.loading = false;
      this.isError = true;
      this.errMessage = '';
      this.popOverDescription = '';

      if (error.error.errors === undefined) {
        this.errMessage = 'Nie można poączyć się z serwerem';
        this.popOverDescription = 'Przy próbie połączenia z serwerem wystąpił błąd. Serwer jest nieosiągalny! ' +
          'Spróbuj ponownie za chwilę. Jeśli błąd będzie się powtarzał skontaktuj się z administratorem.';
      } else {
        this.errMessage = 'Nieprawidłowy typ pliku!';
        this.popOverDescription = 'Próbujesz przesłać niewłaściwy typ pliku. Akceptowalne typy to: TIFF, JPEG, GIF, BMP, PNG';
      }
      console.log('Error code: ' + error.error.errors[0].errorCode);
      },
      );
  }

  test() {
    window.location.href = 'http://localhost:8080/media/test';
  }
}
