import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'snc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SN-Converter-Front-End';

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {}
}
