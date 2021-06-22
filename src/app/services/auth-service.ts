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

  verify(): Observable<boolean> {
    return this.http.get<boolean>("/api/auth/verify")
  }

  signIn(email: string, password: string): Observable<void> {
    return this.http.post<void>(
      "/api/auth/signIn",
      { email: email, password: password }
    )
  }

  signOut(): Observable<void> {
    return this.http.post<void>(
      "/api/auth/signOut", {}
    )
  }
}
