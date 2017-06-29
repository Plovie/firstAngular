import { Component, OnInit } from '@angular/core';
import {MoviesService} from "./movies.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies: any;
  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies()
  }



}
