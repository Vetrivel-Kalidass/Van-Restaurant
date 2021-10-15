import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DishCardComponent } from './dish-card/dish-card.component';



@NgModule({
  declarations: [
    SidenavComponent,
    CarouselListComponent,
    DishCardComponent
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
    DishCardComponent
  ]
})
export class SharedModule { }
