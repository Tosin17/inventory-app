import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthUserData } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private isLoginMode: boolean = false;
  private form: FormGroup;

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

    if (this.isLoginMode) {

    } else {
      this.auth.signUpWithHttp(this.form.value.email, this.form.value.password)
        .subscribe((data: AuthUserData) => {
          console.log(data);
          this.form.reset();
        }, error => {
          console.log(error);
        })
    }

    // this.auth.signUp(this.form.value.email, this.form.value.password)
    //   .subscribe(user => {
    //     console.log(user)
    //   })
  }

}
