import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from './confirm-password.validator';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { addUserAction } from '../../store/actions/user.actions';
import { AddUserRequest } from '../../interfaces/AddUserRequest';
import { Observable, skip } from 'rxjs';
import { addUserSelector } from '../../store/user.selectors';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule, NzButtonModule, NgIf, AsyncPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private store: Store) {}

  phoneRegExp = new RegExp('^[0-9]{10}$');
  passwordRegExp = new RegExp(
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@$!%*?&]).{8,}$'
  );

  signupForm = new FormGroup(
    {
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(this.phoneRegExp),
      ]),
      address: new FormControl<string>('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(this.passwordRegExp),
      ]),
      passwordConfirm: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(this.passwordRegExp),
      ]),
    },
    { validators: confirmPasswordValidator }
  );

  isAuthed$!: Observable<Object>;

  handleSubmit() {
    console.log(this.signupForm.value as AddUserRequest);
    if (this.signupForm.valid) {
      let user: AddUserRequest = {
        name: this.signupForm.value.name!,
        email: this.signupForm.value.email!,
        address: this.signupForm.value.address!,
        password: this.signupForm.value.passwordConfirm!,
        birthDate: this.signupForm.value.birthDate!,
        phone: this.signupForm.value.phone!,
      };
      this.store.dispatch(addUserAction({ user: user }));
      this.isAuthed$ = this.store.select(addUserSelector);
    } else {
      Object.values(this.signupForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
