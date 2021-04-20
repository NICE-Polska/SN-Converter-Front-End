import {Component, Injectable, OnInit} from '@angular/core';
import {DeviceRootObject, SearchFormService} from '../services/search-form/search-form.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {SearchResultComponent} from '../search-result/search-result.component';
import {Router} from '@angular/router';


@Component({
  selector: 'snc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class SearchFormComponent implements OnInit {
  customerName: string;
  idax: string;
  deviceName: string;
  dateOfShipmentStart: any;
  dateOfShipmentEnd: any;
  serialNumber: string;
  device: DeviceRootObject = {} as DeviceRootObject;
  filter: string;
  page: number;
  modalHeaderText: string;
  modalMessage: string;
  vatId: string;

  constructor(private searchFormService: SearchFormService,
              config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  save(formData): void {
    this.filter = 'idax%3D' + this.idax + '%2Ccustomer%3D' + this.customerName + '%2Cname%3D' + this.deviceName + '%2CserialNumber%3D'
      + this.serialNumber + '%2CvatId%3D' + this.vatId + '%2CshipmentDateStart%3D' + this.dateOfShipmentStart + '%2CshipmentDateEnd%3D' + this.dateOfShipmentEnd;
    this.page = 1;
    this.searchFormService.getDevices(this.filter, this.page).subscribe(response => {
      this.searchFormService.searchResults = response;
      }
      , error => {}
      , (() => {
        this.router.navigate(['/search-result']);
        //this.searchResultComponent.visible = true;
        //this.modalMessage = 'Klient został prawidłowo zapisany do bazy danych';
        //this.modalHeaderText = 'Sukces!';
        //this.modalService.open(content);
      }));
  }
}
