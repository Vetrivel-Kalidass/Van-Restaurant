import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from './leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  leaders: leader[] = LEADERS;

  getLeaders(): leader[]{
    return LEADERS;
  }

  getFeaturedLeader(): leader{
    return LEADERS.filter(featuredLeader => featuredLeader.featured == true)[0];
  }
}
