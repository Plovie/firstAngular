import {Component, Input, OnInit} from '@angular/core';
import { Movie } from './movie';
import {MoviesService} from '../service-movie/movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

@Input()  movie: Movie;

  created: boolean;
  updated: boolean;

  constructor(public movieService: MoviesService, public router: Router) {
    if (!this.movie) {
      this.movie = new Movie()
    }
  }

  ngOnInit() {
    this.created = false;
    this.updated = false;
  }

  onSubmit() {
    if (this.movie.id) {
      this.movieService.update(this.movie);
      this.updated = true;
      this.redirection('movies');
    }else {
      this.movieService.create(this.movie);
      this.created = true;
      this.redirection('movies');
    }
  }

  redirection(url: string){
    setTimeout(() => {
      this.router.navigateByUrl(url);
    },1000);
  }

}
