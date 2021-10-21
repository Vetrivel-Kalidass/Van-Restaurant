import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class CommonService {

  private _orderBasketPanel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isOrderBasketOpen(): Observable<boolean> {
    return this._orderBasketPanel;
  }

  setOrderBasketPanelStatus(value: boolean): void {
    this._orderBasketPanel.next(value);
  }

}
