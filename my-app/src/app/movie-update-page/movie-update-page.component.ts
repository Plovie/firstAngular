import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {MoviesService} from "../service-movie/movies.service";

@Component({
  selector: 'app-movie-update-page',
  templateUrl: './movie-update-page.component.html',
  styleUrls: ['./movie-update-page.component.css']
})
export class MovieUpdatePageComponent implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private MoviesService: MoviesService
  ) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.MoviesService.getMovieById(params['id']))
      .subscribe((value) => {
      this.movie = value;
    });
  }

}
