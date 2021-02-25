import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from 'app/auth/store/auth.actions';
import { AuthState } from 'app/auth/store/auth.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private store: Store<AuthState>) {
    // TODO add validators
    this.formGroup = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  public login(): void {
    console.log(this.formGroup);
    this.store.dispatch(AuthActions.login({ payload: this.formGroup.value }));
  }
}
