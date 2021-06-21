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
    return this.http.get<Todo[]>("/api/todo")
  }
}