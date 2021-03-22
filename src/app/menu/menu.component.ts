import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private dishservice: DishService) { }

  dishes: Dish[];
  errMess: string;

  ngOnInit(): void {
    this.dishservice.getDishes().subscribe(result => this.dishes = result,
    errmess => this.errMess = <any>errmess);
  }

}
