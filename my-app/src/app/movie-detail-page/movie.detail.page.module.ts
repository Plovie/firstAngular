import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailPageComponent } from './movie-detail-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MovieDetailPageComponent],
  exports: [MovieDetailPageComponent]
})
export class MovieDetailPageModule { }
