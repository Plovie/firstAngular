import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviePipe} from './movie.pipe';
import {OrderByPipe} from './order.movie.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MoviePipe, OrderByPipe],
  exports: [MoviePipe, OrderByPipe]
})
export class MoviePipeModule { }
