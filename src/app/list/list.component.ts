import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../shared/comments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input('dishescomments') dishescomments: Comment[];

  constructor() { }

  ngOnInit(): void {
  }

}
