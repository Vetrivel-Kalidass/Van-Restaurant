import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { DISHES } from '../menus.component';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {

  dishId: string = '';
  contentType: string = '';
  dishes: any[] = DISHES;

  constructor( 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
  ) { 
    this._activatedRoute.params.subscribe((params: Params) => {
      this.dishId = params['dishId'];
    });
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.contentType = params['contentType'] || "overview";
    });
  }

  ngOnInit(): void {
  }

  submitRating(e: any) {
    console.log(e.target.value);
  }

}
