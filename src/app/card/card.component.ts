import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('dish') selectedDish: Dish;
  constructor() { }
  
 
  ngOnInit(): void {
  }

  
}
