import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  name: string = 'Mateo';
  lastName: string = 'Hurtado';
  phone: number = 3203201805;
  documentType: string = 'CC';
  documentNumber: number = 1013675886;
  email: string = 'mateohurtado@gmail.com';
  address: string = 'Calle 1 # 2 - 3';
  enableName: boolean = false;
  

  constructor() {

   }

  ngOnInit() {
  }

  saveName(): void {
    alert('saveName');
    this.enableName = true;
  }

  modifyAddress(event: Event){
    this.address = (<HTMLInputElement>event.target).value;
  }

}
