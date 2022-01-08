import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DishCardComponent } from './dish-card/dish-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    SidenavComponent,
    CarouselListComponent,
    DishCardComponent,
    StarRatingComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    IvyCarouselModule
  ],
  exports: [
    SidenavComponent,
    CarouselListComponent,
    DishCardComponent,
    StarRatingComponent,
    NotificationsComponent
  ]
})
export class SharedModule { }
