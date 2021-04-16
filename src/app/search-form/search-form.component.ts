import { Component, OnInit } from '@angular/core';
import {DeviceRootObject, SearchFormService} from '../services/search-form/search-form.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {SearchResultComponent} from '../search-result/search-result.component';


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

  constructor(private searchFormService: SearchFormService, private searchResultComponent: SearchResultComponent,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  save(formData) {
    this.customerName = formData.customer;
    this.idax = formData.idax;
    this.deviceName = formData.device;
    this.serialNumber = formData.serialNumber;
    this.filter = 'idax=' + this.idax + ',' + 'customer=' + this.customerName + ',' + 'name=' + this.deviceName + ',' +
      'serialNumber=' + this.serialNumber + ',' + 'vatId=' + this.vatId;
    this.page = 1;
    this.searchFormService.getDevices(this.filter, this.page).subscribe(response => {
      this.searchResultComponent.test = 'DUPA';
      console.log(response);

      }
      , error => {}
      , (() => {
        this.searchResultComponent.visible = true;
        this.idax = '';
        this.modalMessage = 'Klient został prawidłowo zapisany do bazy danych';
        this.modalHeaderText = 'Sukces!';
        //this.modalService.open(content);
      }));
  }
}
