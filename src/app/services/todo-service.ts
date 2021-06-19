import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Todo } from '@app/models/todo'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient
  ) {
  }
  
  getAll(): Observable<Todo[]> {
    return new Observable((observer) => {
      observer.next([{ id: 1, title: "title", body: "body", state: 0 }])
    })
    // return this.http.get<Todo[]>("/api/todo")
  }
}