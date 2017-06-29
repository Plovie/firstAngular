import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {WebsiteVisitorsService} from "./website-visitors.service";

@Injectable()
export class CounterService {
  private count: BehaviorSubject<number>;
  private flag: BehaviorSubject<boolean>;
  private valueState: number;

  constructor(public db: WebsiteVisitorsService) {
    this.count = new BehaviorSubject(0);
    this.flag = new BehaviorSubject(false);

    // db.getFakeDb().then((value) => {
    //   this.count.next(value);
    //   this.valueState = value;
    //   this.flag.next(true);
    // })
    db.getFireDatabase().subscribe((snapshot) => {
      this.count.next(snapshot.val());
      this.valueState = snapshot.val();
      this.flag.next(true);
    })

  }

  getCount(){
    return this.count;
  }

  getFlag(){
    return this.flag;
  }

  countPlusOne(){
    this.valueState++
   //this.count.next(this.valueState);
   this.db.setVisitors(this.valueState);
  }

  countMoinsOne(){
    this.valueState--;
    // this.count.next(this.valueState);
    this.db.setVisitors(this.valueState);
  }

}
