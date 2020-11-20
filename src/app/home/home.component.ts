import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { leader } from '../shared/leader';
import { LeaderService } from '../shared/leader.service';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dish: Dish;
  promotion: Promotion;
  featuredleader: leader;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService
    ) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.featuredleader = this.leaderservice.getFeaturedLeader();
  }

}
