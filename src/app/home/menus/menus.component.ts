import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  carouselConfig = {
    images: [
      {path: "../../../assets/images/bg-1.png"},
      {path: "../../../assets/images/bg-1.png"},
      {path: "../../../assets/images/bg-1.png"},
      {path: "../../../assets/images/bg-1.png"}
    ],
    cellWidth: "100%",
    objectFit: "cover",
    height: 505,
    pauseOnHover: true,
    arrows: true,
    autoplay: true,
    dots: true,
    loop: true,
    cellsToShow: 1
  };

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);
  }

  ngOnInit(): void {
  }

}
