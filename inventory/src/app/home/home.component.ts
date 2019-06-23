import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthUserData } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private isLoginMode: boolean = false;
  private form: FormGroup;
  private handleResponse: any = {
    next: (data: AuthUserData) => {
      console.log(data);
      this.form.reset();
    },
    error: error => {
      console.error(error);
    }
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
    const { required, email, minLength } = Validators;
    this.form = new FormGroup({
      email: new FormControl('', [required, email]),
      password: new FormControl('', [required, minLength(6)])
    })
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    let obs$: Observable<AuthUserData>;

    if (this.isLoginMode) {
      obs$ = this.auth.signInWithHttp(this.form.value.email, this.form.value.password);
    } else {
      obs$ = this.auth.signUpWithHttp(this.form.value.email, this.form.value.password);
    }

    obs$.subscribe(this.handleResponse);
  }

}
