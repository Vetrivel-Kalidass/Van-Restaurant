import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrderBasketComponent } from './order-basket/order-basket.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    OrderBasketComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    CoreModule
  ]
})
export class HomeModule { }
