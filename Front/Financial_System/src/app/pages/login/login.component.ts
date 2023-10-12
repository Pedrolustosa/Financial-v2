import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../../services/login.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  constructor(
    private loginService: LoginService,
    public formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService
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
    this.loginService.login(this.dataForm["email"].value, this.dataForm["password"].value).subscribe(
      token => {
        this.authService.setToken(token);
        this.authService.AuthenticatedUser(true);
        this.router.navigate(['/dashboard']);
      },
      error => {
        alert("Error Login!")
      }
    );
  }
}
