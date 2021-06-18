import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: "todo",
    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }