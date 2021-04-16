import { Component, OnInit } from '@angular/core';
import {SerialNumberGenerateComponent} from '../serial-number-generate/serial-number-generate.component';
import {
  CustomersData,
  DeviceRootObject,
  CustomerRootObject,
  SerialNumberSaveService,
  Customer, Media
} from '../services/serial-number-save/serial-number-save.service';

@Component({
  selector: 'snc-serial-number-save',
  templateUrl: './serial-number-save.component.html',
  styleUrls: ['./serial-number-save.component.css']
})
export class SerialNumberSaveComponent implements OnInit {
  serialNumber: string;
  rootObject: CustomerRootObject = {} as CustomerRootObject;
  customers: CustomersData;
  file: File;
  device: DeviceRootObject = {} as DeviceRootObject;
  customerDevice: Customer = {} as Customer;
  mediaDevice: Media = {} as Media;
  vatId: string;
  name: string;
  customerId: number;
  dateOfShipment: any;

  constructor(private serialNumberGenerateComponent: SerialNumberGenerateComponent,
              private serialNumberSaveService: SerialNumberSaveService) {}

  ngOnInit(): void {
    this.serialNumber = this.serialNumberGenerateComponent.serialNumber;
    this.serialNumberGenerateComponent.isError = false;
    this.serialNumberSaveService.getCustomers().subscribe(value => {
      this.rootObject = value;
    });
  }

  save(formData) {
    this.file = this.serialNumberGenerateComponent.file;
    this.serialNumberSaveService.saveFile(this.file).subscribe(response => {
      this.mediaDevice.id = response.data.id;
      this.device.media = this.mediaDevice;
      this.serialNumberGenerateComponent.loading = !this.serialNumberGenerateComponent.loading;
      }
    , error => {}
    , (() => {
        this.device.serialNumber = this.serialNumber;
        this.device.name = this.name;
        this.customerDevice.id = this.customerId;
        this.device.customer = this.customerDevice;
        this.device.dateOfShipment = this.dateOfShipment;
        this.device.vatId = this.vatId;

        this.serialNumberSaveService.saveDevice(this.device).subscribe(response => {}
          , error => {},
          (() => {
            this.serialNumberGenerateComponent.loading = false;
            this.serialNumberGenerateComponent.serialNumber = '';
          }));
      }));
  }
}
