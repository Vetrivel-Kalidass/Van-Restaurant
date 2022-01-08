import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<NotificationsComponent>,
    private _router: Router
  ) {}

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._router.navigateByUrl(`/home/${path}`)
      .then(() => this._bottomSheetRef.dismiss());
  }

  click() {
    this._bottomSheetRef.dismiss();
  }

}
