import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitRating(value: any) {
    console.log(value);
  }

}
