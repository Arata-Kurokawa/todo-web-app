import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoIndexComponent } from './index/index.component';
import { TodoAddComponent } from './add/add.component'

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoIndexComponent,
    TodoAddComponent
  ]
})
export class TodoModule { }