import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {MoviesPageModule} from './movies-page/movies-page.module';
import {UsersPageModule} from './users-page/users-page.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MovieDetailPageModule} from './movie-detail-page/movie.detail.page.module';
import {MovieUpdatePageModule} from './movie-update-page/movie-update-page.module';
import {MovieCreateModule} from './movie-create/movie-create.module';
import {FormsModule} from '@angular/forms';
import {MoviePipeModule} from './general/movie-pipe/movie-pipe.module';
import {SmallMovieCardModule} from './cards/small-cards/small-movie-card/small-movie-card.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    UsersPageModule,
    MoviesPageModule,
    MovieDetailPageModule,
    MovieUpdatePageModule,
    MovieCreateModule,
    FormsModule,
    MoviePipeModule,
    SmallMovieCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
