import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'vr-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems: NavigationActions[] = [
    {
      label: "Home",
      icon: "restaurant_menu",
      path: "/home/menu",
      type: "link"
    },
    {
      label: "Dine",
      icon: "shopping_bag",
      type: "button",
      onClickEvt: "orderBasket"
    },
    {
      label: "Favourites",
      icon: "bookmark_border",
      path: "/home/favourites",
      type: "link"
    },
    {
      label: "Dashboard",
      icon: "data_usage",
      path: "/home/dashboard",
      type: "link"
    },
    {
      label: "Notifications",
      icon: "notifications",
      type: "button",
      onClickEvt: "notifications"
    },
    {
      label: "Settings",
      icon: "settings",
      path: "/home/settings",
      type: "link"
    },
    {
      label: "Logout",
      icon: "logout",
      type: "button",
      onClickEvt: "logout"
    }
  ]

  constructor(
    private _commonService: CommonService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  navActions(action: 'orderBasket' | 'notifications' | 'logout' | undefined): void {
    switch (action) {
      case 'orderBasket':
        this._commonService.setOrderBasketPanelStatus(true);
        break;
      case 'notifications':
        alert("notifcations");
        break;
      case 'logout':
        this._router.navigate(['/auth']);
        break;

      default:
        break;
    }
  }

}

export interface NavigationActions {
  label: string
  icon: string
  path?: string
  type: "button" | "link"
  onClickEvt?: "orderBasket" | "notifications" | "logout"
}
