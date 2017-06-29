import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {WebsiteVisitorsService} from "./website-visitors.service";
import {CounterService} from "./counter.service";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "environments/environment";


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers:[WebsiteVisitorsService, CounterService],
  declarations: [CounterComponent],
  exports:[CounterComponent]
})
export class CounterModule { }
