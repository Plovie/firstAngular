import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page.component';
import {MovieCardModule} from '../cards/normal-cards/movie-card/movie-card.module';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {MoviesService} from '../service-movie/movies.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MoviePipeModule} from "../general/movie-pipe/movie-pipe.module";

@NgModule({
  imports: [
    CommonModule,
    MovieCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule,
    MoviePipeModule
  ],
  providers: [MoviesService],
  declarations: [MoviesPageComponent],
  exports: [MoviesPageComponent]
})
export class MoviesPageModule { }
