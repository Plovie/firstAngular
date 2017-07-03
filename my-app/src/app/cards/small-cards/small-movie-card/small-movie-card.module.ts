import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallMovieCardComponent } from './small-movie-card.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SmallMovieCardComponent],
  exports: [SmallMovieCardComponent]
})
export class SmallMovieCardModule { }
