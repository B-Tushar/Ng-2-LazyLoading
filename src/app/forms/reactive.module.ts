import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const routes: Routes = [{path:'',component:ReactiveFormComponent}];

@NgModule({
  imports: [ReactiveFormsModule,FormsModule,
    CommonModule,RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [ReactiveFormComponent]
})
export class ReactiveModule{ }
