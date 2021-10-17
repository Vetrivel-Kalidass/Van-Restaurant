import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { CommentsComponent } from './comments/comments.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    MenusComponent,
    DishDetailsComponent,
    CommentsComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    IvyCarouselModule,
    MaterialModule,
    SharedModule
  ]
})
export class MenusModule { }
