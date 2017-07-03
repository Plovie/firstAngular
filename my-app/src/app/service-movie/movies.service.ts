import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class MoviesService {
  private movies: FirebaseListObservable<any>;


  constructor(public afDb: AngularFireDatabase) {
    this.movies = afDb.list('/movies');
  }

  getMovies() {
    return this.movies;
  }

  getMovieById(id) {
    return this.afDb.object('/movies/' + id);
  }

  getMoviesByName(title) {
    return this.afDb.list('/movies/', {
      query: {
        orderByChild: 'title',
        equalTo: title
      }
    })
  }

  update(movie) {
    this.afDb.object('/movies/' + movie.id).update(movie);
  }


  create(movie) {
    this.afDb.list('/movies').push(movie).then((value) => {
      this.afDb.object('/movies/' + value.key).update({id: value.key} );
    });
  }

  delete(id) {
    this.afDb.list('/movies/' + id).remove()
  }

}
