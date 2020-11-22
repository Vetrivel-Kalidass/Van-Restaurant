import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comments';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prevId: string;
  nextId: string;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe( dishIds => (this.dishIds = dishIds));
    this.route.params.pipe(switchMap((param: Params) => this.dishservice.getDish(param['id'])))
      .subscribe(dish => this.dish = dish);
  }

  setPrevNext(id: string){
    const index = this.dishIds.indexOf(id);
    this.prevId = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.nextId = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
