import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MoviesPageModule} from "./movies-page/movies-page.module";
import {UsersPageModule} from "./users-page/users-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UsersPageModule,
    MoviesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
