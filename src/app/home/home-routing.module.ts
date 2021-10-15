import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
      { path: 'favourites', loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
