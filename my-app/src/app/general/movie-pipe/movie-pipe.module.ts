import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviePipe} from './movie.pipe';
import {OrderByPipe} from './order.movie.pipe';
import {MovieAllPipe} from "./movie-all-properties.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePipe, OrderByPipe,MovieAllPipe],
  exports: [MoviePipe, OrderByPipe,MovieAllPipe]
})
export class MoviePipeModule { }
