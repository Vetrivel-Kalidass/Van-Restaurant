import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DISHES } from '../menus.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  searchValue!: string;
  category!: NameValue;
  categories: any[] = CATEGORIES;
  orderType: NameValue = ORDERTYPES[0];
  orderTypes: NameValue[] = ORDERTYPES;
  dishes: any[] = DISHES;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.searchValue = params['search'];
      this.category = this.getCategory(params['category']);
    });
  }

  ngOnInit(): void {
  }

  filterCategory(category: NameValue) {
    const qp: DishFilter = { category: category.value };
    if (this.searchValue && this.searchValue.length) qp['search'] = this.searchValue;

    this._router.navigate(['/home/categories'], { queryParams: qp });
  }

  resetFilter() {
    if (this.searchValue && this.searchValue.length)
      this._router.navigate(['/home/categories'], { queryParams: { search: this.searchValue } });
    else this._router.navigate(['/home/categories']);
  }

  setOrderType(type: NameValue) {
    this.orderType = type;
  }

  getCategory(value: string) {
    return this.categories.find(cat => cat.value === value);
  }

}

export interface DishFilter {
  search?: string;
  category?: string;
};
export interface NameValue {
  id: number;
  name: string;
  value: string;
};

export const ORDERTYPES: NameValue[] = [
  {
    id: 1,
    name: "Dine In",
    value: "dinein"
  },
  {
    id: 2,
    name: "Go To",
    value: "goto"
  },
  {
    id: 3,
    name: "Delivery",
    value: "delivery"
  }
];

export const CATEGORIES: NameValue[] = [
  {
    id: 1,
    name: "Hot Dishes",
    value: "hotdishes"
  },
  {
    id: 2,
    name: "Cold Dishes",
    value: "colddishes"
  },
  {
    id: 3,
    name: "Soup",
    value: "soup"
  },
  {
    id: 4,
    name: "Grill",
    value: "grill"
  },
  {
    id: 5,
    name: "Appetizer",
    value: "appetizer"
  },
  {
    id: 6,
    name: "Dessert",
    value: "dessert"
  }
];
