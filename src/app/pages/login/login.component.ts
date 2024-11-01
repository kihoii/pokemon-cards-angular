import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Store } from '@ngrx/store';
import { authUserAction } from '../../store/actions/user.actions';
import { AuthRequest } from '../../interfaces/AuthRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzFormModule, ReactiveFormsModule, NzButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private store: Store) {}

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  handleSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        authUserAction({ user: this.loginForm.value as AuthRequest })
      );
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
