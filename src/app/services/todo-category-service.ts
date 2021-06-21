import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { TodoCategory } from '@app/models/todoCategory'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TodoCategoryService {
  constructor(
    private http: HttpClient
  ) {
  }
  
  getAll(): Observable<TodoCategory[]> {
    return this.http.get<TodoCategory[]>("/api/todoCategory")
  }
}