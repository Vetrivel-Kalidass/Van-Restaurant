import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
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
