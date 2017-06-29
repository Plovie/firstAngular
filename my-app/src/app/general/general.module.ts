import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Db} from "./firebase.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Db]
})
export class GeneralModule { }
