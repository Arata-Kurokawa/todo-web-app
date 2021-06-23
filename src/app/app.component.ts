import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { signOut } from '@app/stores/auth/auth.action'
import { AuthState } from '@app/stores/auth/auth.state'

import { isSignedIn } from "@app/stores/auth/auth.selector"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-web-app';

  isSignedIn$ = this.store.select(isSignedIn);

  constructor(
    private store: Store
  ) { }

  onSignOut() {
    this.store.dispatch(signOut())
  }
}
