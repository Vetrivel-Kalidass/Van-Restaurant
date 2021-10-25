import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vr-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit {

  @Input() dishes: any[] = [];
  @Input() dishType: 'view' | 'edit' = "view";

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
  
  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);
  }

  ngOnInit(): void {
    this.carouselConfig.height = this.dishType === 'edit' ? 299 : 265;
  }

}
