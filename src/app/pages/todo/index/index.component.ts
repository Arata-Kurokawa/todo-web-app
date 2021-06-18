import { Component } from '@angular/core'
import { Todo } from '@app/models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class TodoIndexComponent {
  title = "Todo一覧"

  todoList: Todo[] = [
    { id: 1, title: "インフラ", body: "ESCを用いた開発環境の構築", state: Todo.Status.WAITING },
    { id: 2, title: "バックエンド", body: "APIの実装", state: Todo.Status.IN_PROGRESS },
    { id: 3, title: "フロント", body: "Angularの実装", state: Todo.Status.COMPLETED }
  ]
}
