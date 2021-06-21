import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoCategory } from '@app/models/todoCategory';

import { TodoService } from '@app/services/todo-service'
import { TodoCategoryService } from '@app/services/todo-category-service'
import { CustomValidators } from '@app/validators/custom-validators';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [TodoCategoryService]
})
export class TodoAddComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required, CustomValidators.integer])
  })

  todoCategoryList: TodoCategory[] = []

  constructor(
    private todoService: TodoService,
    private todoCategoryService: TodoCategoryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.todoCategoryService.getAll().subscribe(data => {
      this.todoCategoryList = data
    })
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return
    }

    this.todoService.create(this.form.value.title, this.form.value.body, this.form.value.categoryId).subscribe(_ => {
      this.router.navigate(['/todo'])
    })
  }
}
