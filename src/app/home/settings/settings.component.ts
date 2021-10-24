import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CATEGORIES, NameValue } from '../menus/categories/categories.component';
import { DISHES } from '../menus/menus.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  category!: NameValue;
  categories: any[] = CATEGORIES;
  dishes: any[] = DISHES;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.category = this.getCategory(params['category']);
    });
  }

  ngOnInit(): void {
  }

  filterCategory(category: NameValue) {
    this._router.navigate(['/home/settings'], { queryParams: { category: category.value } });
  }

  resetFilter() {
    this._router.navigate(['/home/settings']);
  }

  getCategory(value: string) {
    return this.categories.find(cat => cat.value === value);
  }

}
