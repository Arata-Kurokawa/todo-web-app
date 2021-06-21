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

  create(title: string, body: string, categoryId: number): Observable<Todo.Id> {
    const reqBody = { title: title, body: body, categoryId: categoryId }
    return this.http.post<Todo.Id>("/api/todo", reqBody)
  }

  // remove(id: Todo.Id): Observable<void> {
  //   return this.http.delete<void>(`/api/todo/${id}`)
  // }
}