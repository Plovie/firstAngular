import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './user-cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserCardsComponent],
  exports: [UserCardsComponent]
})
export class UserCardsModule { }
