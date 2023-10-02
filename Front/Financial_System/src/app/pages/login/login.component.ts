import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
    (
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }
    )
  }

  get dataForm() {
    return this, this.loginForm.controls;
  }

  loginUser() {
    alert("OK")
  }
}
