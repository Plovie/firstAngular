import {Injectable, OnInit} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()

export class Db implements OnInit{
  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(){
    this.items = this.db.list('/movies');
  }

}
