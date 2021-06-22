import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '@app/validators/custom-validators';

type Errors = { errors: string[] }
type FormErrors = {
  title: Errors,
  body: Errors,
  categoryId: Errors
}

export class TodoAddForm {
  groupForm: FormGroup
  
  private title = new FormControl('title', [Validators.required])
  private body = new FormControl('body', [Validators.required])
  private categoryId = new FormControl('categoryId', [Validators.required, CustomValidators.integer])

  constructor() {
    this.groupForm = new FormGroup(
      {
        title: this.title,
        body: this.body,
        categoryId: this.categoryId
      }
    )
  }

  errors(): FormErrors | null {
    if (!this.groupForm.invalid) {
      return null
    }

    var formErrors: FormErrors = {
      title: { errors: [] },
      body: { errors: [] },
      categoryId: { errors: [] }
    }

    if (this.title.errors?.required) {
      formErrors.title.errors.push("required")
    }

    if (this.body.errors?.required) {
      formErrors.body.errors.push("required")
    }

    if (this.categoryId.errors?.required) {
      formErrors.categoryId.errors.push("required")
    } else if (this.categoryId.errors?.integer) {
      formErrors.categoryId.errors.push("plase enter integer")
    }
    

    return formErrors
  }
}