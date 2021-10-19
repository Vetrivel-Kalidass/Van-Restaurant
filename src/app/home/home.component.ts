import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'vr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchValue: string = '';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.searchValue = params['search'] || '';
    });
  }

  search() {
    this.searchValue = this.searchValue.trim();
    if (this.searchValue && this.searchValue.length)
      this._router.navigate(['/home/categories'], { queryParams: { search: this.searchValue } });
    else this._router.navigate(['/home/categories']);
  }

}
