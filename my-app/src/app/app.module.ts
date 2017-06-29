import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MoviesPageModule} from "./movies-page/movies-page.module";
import {UsersPageModule} from "./users-page/users-page.module";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {GeneralModule} from "./general/general.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    UsersPageModule,
    MoviesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
