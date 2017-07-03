import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MoviesService} from '../service-movie/movies.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit, OnDestroy {

  movie: any;
  test: any;
  deleted: boolean;

  constructor(
    private route: ActivatedRoute,
    private MoviesService: MoviesService,
    public router: Router
    ) { }

  ngOnInit() {
    this.deleted = false;
   this.test = this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => {
        return this.MoviesService.getMovieById(params['id']);
      })
      .subscribe((value) => {this.movie = value});
  }

  deleteMovie(id) {
    this.deleted = true;
    this.MoviesService.delete(id);
    setTimeout(() => {
      this.router.navigateByUrl('movies');
    }, 1000);
  }

  ngOnDestroy () {
    this.test.unsubscribe();
}

}
