import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "./counter.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private count: BehaviorSubject<number>;
  private flag: BehaviorSubject<boolean>;

  constructor(public counterService: CounterService) {
  }

  ngOnInit() {
    this.count = this.counterService.getCount();
    this.flag = this.counterService.getFlag();
  }

  addOne(){
    this.counterService.countPlusOne();
  }

  deleteOne(){
    this.counterService.countMoinsOne();
  }

}
