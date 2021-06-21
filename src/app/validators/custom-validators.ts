import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static integer: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const integer = Number.isInteger(control.value)
    return integer ? null : { integer: control.value };
  }
}