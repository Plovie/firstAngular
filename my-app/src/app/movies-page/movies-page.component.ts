import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../service-movie/movies.service';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],

})
export class MoviesPageComponent implements OnInit {

  @Input() search: string;
  orderByDate: boolean;

  private searchTerms = new Subject<string>();
  movies: any;
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.orderByDate = true;
  }

  get order()   { return this.orderByDate ? {order: 'ASC', on: 'releaseYear'} : {order: 'DESC', on: 'releaseYear'} ; }
  toggleOrder() { this.orderByDate = !this.orderByDate;
    console.log(this.orderByDate);
  }



}
