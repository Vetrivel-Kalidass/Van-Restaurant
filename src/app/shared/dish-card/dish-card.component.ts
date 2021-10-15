import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vr-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() dish: any;

  constructor() { }

  ngOnInit(): void {
  }

}
