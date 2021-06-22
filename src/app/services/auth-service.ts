import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {
  }

  signIn(email: string, password: string): Observable<string> {
    return new Observable((observer) => {
      observer.next("sign in success")
    })
  }
}
