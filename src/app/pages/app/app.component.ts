import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { signOut } from '@app/stores/auth/auth.action'
import { AuthState } from '@app/stores/auth/auth.state'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-web-app';

  // TODO selectorにできるはず！！
  isSignedIn$ = this.store.select('auth').pipe(map(auth => auth.isSignedIn));

  constructor(
    private store: Store<{ auth: AuthState }>
  ) { }

  onSignOut() {
    this.store.dispatch(signOut())
  }
}
