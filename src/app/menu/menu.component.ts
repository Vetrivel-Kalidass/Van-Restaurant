import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private dishservice: DishService) { }

  dishes: Dish[] = DISHES;
  selectedDish: Dish;
  ngOnInit(): void {
    this.dishes = this.dishservice.getdish();
  }

  onSelect(dish){
    this.selectedDish = dish;
  }
}
