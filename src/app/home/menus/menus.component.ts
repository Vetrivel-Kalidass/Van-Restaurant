import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-menus',
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
  dishCarouselConfig = {
    cellWidth: "100%",
    height: 170,
    pauseOnHover: true,
    arrows: true,
    autoplay: true,
    dots: false,
    loop: true,
    cellsToShow: 5
  };

  dishes: any[] = [
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
    {
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Spicy seasoned seafood noodles",
      price: 233,
      avl: 22
    },
  ]

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);
  }

  ngOnInit(): void {
  }

}
