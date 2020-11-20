import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id: any = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
    console.log(id);
    console.log(this.dish);
    console.log(this.dishservice.getDish(id));
    console.log(this.dishservice.getDish(id));
  }

  goBack(): void {
    this.location.back();
  }

}
