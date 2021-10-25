import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vr-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() dish: any;
  @Input() dishType: 'view' | 'edit' = "view";

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  navigateTo(id: any) {
    this._router.navigate(['./home/menu', id]);
  }

}
