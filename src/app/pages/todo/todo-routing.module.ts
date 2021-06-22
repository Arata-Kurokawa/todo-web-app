import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth-guard'

import { TodoIndexComponent } from './index/index.component'
import { TodoAddComponent } from './add/add.component'

const routes: Routes = [
  { path: '', component: TodoIndexComponent, canActivate: [AuthGuard] },
  { path: 'add', component: TodoAddComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class TodoRoutingModule { }
