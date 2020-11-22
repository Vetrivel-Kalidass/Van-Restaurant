import { Component, OnInit } from '@angular/core';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice: LeaderService) { }

  leaders: leader[];
  ngOnInit(): void {
    this.leaderservice.getLeaders().subscribe(result =>{
      this.leaders = result;
    });
  }

}
