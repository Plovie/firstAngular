import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieUpdatePageComponent } from './movie-update-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MovieFormModule} from "../movie-form/movie-form.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MovieFormModule
  ],
  declarations: [MovieUpdatePageComponent]
})
export class MovieUpdatePageModule { }
