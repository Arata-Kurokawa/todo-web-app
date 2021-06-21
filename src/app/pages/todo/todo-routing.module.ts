import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoIndexComponent } from './index/index.component'
import { TodoAddComponent } from './add/add.component'

const routes: Routes = [
  { path: '', component: TodoIndexComponent },
  { path: 'add', component: TodoAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
