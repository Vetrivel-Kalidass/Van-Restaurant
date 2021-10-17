import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menuItems = [
    {
      label: "Home",
      icon: "restaurant_menu",
      path: "/home/menu"
    },
    {
      label: "Dine",
      icon: "shopping_bag",
      path: "/dine"
    },
    {
      label: "Favourites",
      icon: "bookmark_border",
      path: "/home/favourites"
    },
    {
      label: "Dashboard",
      icon: "data_usage",
      path: "/dashboard"
    },
    {
      label: "Notifications",
      icon: "notifications",
      path: "/notifications"
    },
    {
      label: "Settings",
      icon: "settings",
      path: "/settings"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
