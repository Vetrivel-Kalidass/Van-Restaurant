import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vr-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  @Input() dishes: any[] = [];

  carouselConfig = {
    cellWidth: "100%",
    height: 265,
    pauseOnHover: true,
    arrows: true,
    autoplay: true,
    dots: false,
    loop: true,
    cellsToShow: 5
  };
  constructor() { }

  ngOnInit(): void {
  }

}
