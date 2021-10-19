import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.scss']
})
export class OrderBasketComponent implements OnInit {

  orderType: string = 'dinein';
  constructor() { }

  ngOnInit(): void {
  }

}
