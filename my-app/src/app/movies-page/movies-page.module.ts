import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page.component';
import {MovieCardModule} from "../cards/normal-cards/movie-card/movie-card.module";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";
import {MoviesService} from "./movies.service";

@NgModule({
  imports: [
    CommonModule,
    MovieCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers:[MoviesService],
  declarations: [MoviesPageComponent],
  exports:[MoviesPageComponent]
})
export class MoviesPageModule { }
