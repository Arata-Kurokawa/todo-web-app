import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoIndexComponent } from './index/index.component';
import { TodoAddComponent } from './add/add.component'

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoIndexComponent,
    TodoAddComponent
  ]
})
export class TodoModule { }