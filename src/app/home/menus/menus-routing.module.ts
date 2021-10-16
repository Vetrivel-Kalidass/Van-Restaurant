import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

const routes: Routes = [
  { path: '', component: MenusComponent },
  { path: ':dishId', component: DishDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
