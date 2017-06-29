import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieCardComponent],
  exports:[MovieCardComponent]
})
export class MovieCardModule { }
