import { Component, OnInit } from '@angular/core'

import { Todo } from '@app/models/todo'
import { TodoService } from '@app/services/todo-service'

@Component({
  selector: 'app-todo',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class TodoIndexComponent implements OnInit {
  // todoList: Todo[] = [
  //   { id: 1, title: "インフラ", body: "ESCを用いた開発環境の構築", state: Todo.Status.WAITING },
  //   { id: 2, title: "バックエンド", body: "APIの実装", state: Todo.Status.IN_PROGRESS },
  //   { id: 3, title: "フロント", body: "Angularの実装", state: Todo.Status.COMPLETED }
  // ]

  todoList: Todo[] = []

  constructor(
    private todoService: TodoService
  ) {

  }

  ngOnInit() {
    this.todoService.getAll().subscribe(data => {
      this.todoList = data
    })
  }
}
