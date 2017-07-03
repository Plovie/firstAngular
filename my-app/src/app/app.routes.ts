import {Routes} from '@angular/router';
import {MoviesPageComponent} from './movies-page/movies-page.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {MovieDetailPageComponent} from './movie-detail-page/movie-detail-page.component';
import {MovieUpdatePageComponent} from './movie-update-page/movie-update-page.component';
import {MovieCreateComponent} from './movie-create/movie-create.component';


export const appRoutes: Routes = [
  { path: 'movies', component: MoviesPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'movies/:id', component: MovieDetailPageComponent },
  { path: 'new', component: MovieCreateComponent },
  { path: 'movies/update/:id', component: MovieUpdatePageComponent},


];


