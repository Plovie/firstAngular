import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MoviesService} from './service-movie/movies.service';
import {FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  searchGeneral: string;
  movies: FirebaseListObservable<any>
  searchMovies: any;

  constructor(public serviceMovie: MoviesService){}

  ngOnInit() {

    this.movies = this.serviceMovie.getMovies();
    this.movies.subscribe(value => {
      this.searchMovies = value;
    })
  }

  cleanSearch() {
    console.log('coucou');
    this.searchGeneral = "";
  }
}
