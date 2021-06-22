import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { signOut } from '@app/stores/auth/auth.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-web-app';

  constructor(
    private store: Store
  ) { }

  onSignOut() {
    this.store.dispatch(signOut())
  }
}
