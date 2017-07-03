import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create.component';
import {MovieFormModule} from '../movie-form/movie-form.module';
import {Movie} from '../movie-form/movie';

@NgModule({
  imports: [
    CommonModule,
    MovieFormModule
  ],
  declarations: [MovieCreateComponent],
  exports: [MovieCreateComponent]
})
export class MovieCreateModule { }
