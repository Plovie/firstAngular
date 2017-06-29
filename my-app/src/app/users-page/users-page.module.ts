import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import {UserCardsModule} from "../cards/normal-cards/user-cards/user-cards.module";
import {CounterModule} from "../counter/counter.module";

@NgModule({
  imports: [
    CommonModule,
    UserCardsModule,
    CounterModule
  ],
  declarations: [UsersPageComponent],
  exports:[UsersPageComponent]
})
export class UsersPageModule { }
