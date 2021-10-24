import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
      { path: 'favourites', loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) },
      { path: 'confirm-payment', component: PaymentComponent },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
