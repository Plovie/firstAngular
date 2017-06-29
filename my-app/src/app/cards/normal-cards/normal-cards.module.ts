import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardModule} from "./movie-card/movie-card.module";

@NgModule({
  imports: [
    CommonModule,
    MovieCardModule
  ],
  declarations: []
})
export class NormalCardsModule { }
