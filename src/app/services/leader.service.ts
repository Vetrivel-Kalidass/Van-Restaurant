import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  leaders: leader[] = LEADERS;

  getLeaders(): Observable<leader[]>{
    return of(LEADERS).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<leader>{
    return of(LEADERS.filter(featuredLeader => featuredLeader.featured == true)[0]).pipe(delay(2000));
  }
}
