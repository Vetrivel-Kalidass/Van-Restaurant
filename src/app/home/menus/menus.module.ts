import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    IvyCarouselModule,
    MaterialModule
  ]
})
export class MenusModule { }
