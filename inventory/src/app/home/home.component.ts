import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private canLogin: boolean = false;
  private form: FormGroup;

  constructor() { }

  ngOnInit() {
    const { required, email } = Validators;
    this.form = new FormGroup({
      email: new FormControl('', [required, email]),
      password: new FormControl('', required)
    })
  }

  switchMode() {
    this.canLogin = !this.canLogin;
  }

  onSubmit() {
    console.log('Submitted!')
  }

}
