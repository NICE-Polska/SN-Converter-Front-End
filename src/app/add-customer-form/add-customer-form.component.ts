import { Component, OnInit } from '@angular/core';
import {AddCustomerFormService, CustomerAddRootObject} from '../services/add-customer-form/add-customer-form.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'snc-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddCustomerFormComponent implements OnInit {
  name: string;
  idax: string;
  modalHeaderText: string;
  modalMessage: string;
  customer: CustomerAddRootObject = {} as CustomerAddRootObject;

  constructor(private addCustomerFormService: AddCustomerFormService,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  save(formData, content){
    this.customer.name = formData.name;
    this.customer.idax = formData.idax;
    this.addCustomerFormService.saveCustomer(this.customer).subscribe(response => {}
      , error => {}
      , (() => {
        this.name = '';
        this.idax = '';
        this.modalMessage = 'Klient został prawidłowo zapisany do bazy danych';
        this.modalHeaderText = 'Sukces!';
        this.modalService.open(content);
      }));
  }
}
