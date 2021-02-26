import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from 'app/auth/store/auth.actions';
import { AuthState } from 'app/auth/store/auth.reducer';
import { fadeInAnimation } from 'app/shared/animations/fade-in.animation';
import * as AppActions from 'app/store/app.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fadeInAnimation],
})
export class LoginPageComponent {
  public formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private store: Store<AuthState>) {
    this.formGroup = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required]],
    });
    this.store.dispatch(
      AppActions.setMainBackground({
        background: '/assets/images/login-bg.png',
      }),
    );
  }

  public login(): void {
    this.store.dispatch(AuthActions.login({ payload: this.formGroup.value }));
  }
}
