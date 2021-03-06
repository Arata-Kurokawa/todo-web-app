import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signIn } from '@app/stores/auth/auth.action'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.store.dispatch(signIn({ email: 'email', password: 'password' }))
  }
}
