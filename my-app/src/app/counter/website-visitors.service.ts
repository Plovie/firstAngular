import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";


@Injectable()
export class WebsiteVisitorsService {

  fakeDb: Promise<number>;
  NumberVisitors: FirebaseObjectObservable<any>;


  constructor(afDb: AngularFireDatabase) {
    this.fakeDb = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(10);
      },3000)
    });
    this.NumberVisitors = afDb.object('/visitors', { preserveSnapshot: true });
  }

  getFakeDb(){
    return this.fakeDb;
  }

  getFireDatabase(){
    return this.NumberVisitors;
  }

  setVisitors(number){
    this.NumberVisitors.set(number);
  }

}
