import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

const routes: Routes = [
  { path: 'menu', component: MenusComponent },
  { path: 'menu/:dishId', component: DishDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
