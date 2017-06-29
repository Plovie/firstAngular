import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class MoviesService {
  private movies: FirebaseListObservable<any>;
  constructor(public afDb: AngularFireDatabase) {
    this.movies = afDb.list("/movies");
  }

  getMovies() {
    return this.movies;
  }

}
