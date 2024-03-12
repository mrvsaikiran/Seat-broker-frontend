import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { loginModel } from '../../Models/login';
import { validateForm } from '../../helpers/validateForm';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  LoginData: loginModel = new loginModel('', '');

  type: string = 'password';
  isText: boolean = false;

  isErrorFound: boolean = false;
  ErrorMsg: string = 'Please fill the Required data to login';
  eyeIconClass: string = 'fa-eye-slash';

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],

      Password: new FormControl(null, Validators.required),
    });
  }

  toggeleVisbility(): void {
    this.isText = !this.isText;
    this.isText
      ? (this.eyeIconClass = 'fa-eye')
      : (this.eyeIconClass = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  isFieldValid(controlName: string): boolean {
    return (
      this.loginForm.controls[controlName].dirty &&
      this.loginForm.hasError('required', controlName)
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.username = this.loginForm.value.Username;
      this.password = this.loginForm.value.Password;
      this.LoginData = new loginModel(this.username, this.password);

      this.auth.login(this.LoginData).subscribe({
        next: (res) => {
          alert(res.message);
          this.auth.StoreToken(res.token);
          this.router.navigate(['home']);
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
    } else {
      this.isErrorFound = true;
      validateForm.validateAllFormFeilds(this.loginForm);
      console.log(this.loginForm);
    }
  }
}
