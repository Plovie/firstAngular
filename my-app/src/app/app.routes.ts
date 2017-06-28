import {Routes} from "@angular/router";
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {UsersPageComponent} from "./users-page/users-page.component";


export const appRoutes: Routes = [
  { path: 'movies', component: MoviesPageComponent },
  { path: 'users', component: UsersPageComponent },

];


