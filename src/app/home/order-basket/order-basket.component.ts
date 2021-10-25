import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'vr-order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.scss']
})
export class OrderBasketComponent implements OnInit {

  orderType: string = 'dinein';
  isPanelOpened: Observable<boolean> = of(false);

  constructor(
    private _commonService: CommonService
   ) { }

  ngOnInit(): void {
    this.isPanelOpened = this._commonService.isOrderBasketOpen;
  }

  closePanel(): void {
    this._commonService.setOrderBasketPanelStatus(false);
  }

}
