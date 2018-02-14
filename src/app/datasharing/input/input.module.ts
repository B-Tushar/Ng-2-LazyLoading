import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InputComponent} from './input.component';

const routes: Routes = [{path:'',component:InputComponent}];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [InputComponent]
})
export class InputModule { }
