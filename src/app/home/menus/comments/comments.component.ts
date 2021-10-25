import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  tiles: any[] = [
    { image: '../../../../assets/images/bg-1.png', cols: 1, rows: 1 },
    { image: '../../../../assets/images/bg-1.png', cols: 1, rows: 2 },
    { image: '../../../../assets/images/bg-1.png', cols: 1, rows: 2 },
    { image: '../../../../assets/images/bg-1.png', cols: 1, rows: 1 },
    // { image: '../../../../assets/images/bg-1.png', cols: 1, rows: 1 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
