import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './movie-form.component';
import {FormsModule} from '@angular/forms';
import {MoviesService} from "../service-movie/movies.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[MoviesService],
  declarations: [MovieFormComponent],
  exports: [MovieFormComponent]
})
export class MovieFormModule { }
