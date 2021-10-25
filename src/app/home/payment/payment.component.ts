import { Component, OnInit } from '@angular/core';
import { NameValue, ORDERTYPES } from '../menus/categories/categories.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payType: string = 'cc';
  orderType: NameValue = ORDERTYPES[0];
  orderTypes: NameValue[] = ORDERTYPES;

  constructor() { }

  ngOnInit(): void {
  }

  choosePayType(type: string): void {
    this.payType = type;
  }

  setOrderType(type: NameValue) {
    this.orderType = type;
  }

}
