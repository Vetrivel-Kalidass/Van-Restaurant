import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vr-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Output() rating: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitRating(e: any) {
    console.log(e.target.value);
    this.rating.emit(e.target.value);
  }

}
