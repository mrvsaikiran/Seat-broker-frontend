import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { signupDataValidater } from '../../helpers/SignupDataValidater';
import { Observable } from 'rxjs';
import { validateForm } from '../../helpers/validateForm';
import { signupModel } from '../../Models/signup';
import { AuthService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  type: string = 'password';
  isText: boolean = false;
  eyeIconClass: string = 'fa-eye-slash';
  passwordErrrorMsg: string = 'password is Required';
  phoneNumberErrrorMsg: string = 'phone number should not be empty';



  SignUpForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private customValidator: signupDataValidater,
    private auth:AuthService
  ) {

  
    this.SignUpForm = this.formbuilder.group({
      UserName: new FormControl('', Validators.required),
      Password: new FormControl('', [
        Validators.required,
        this.passwordProviderToValidater.bind(this),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        this.phoneNumberValidater.bind(this),
      ]),
    });
  }

  passwordProviderToValidater(
    control: FormControl
  ): { [s: string]: boolean } | null {
    const errormsg = this.customValidator.passwordValidater(control.value);
    if (errormsg != '') {
      this.passwordErrrorMsg = errormsg;
      return { isInvalid: true };
    }
    return null;
  }
  phoneNumberValidater(control: FormControl): { [s: string]: boolean } | null {
    if (control.value.length < 10) {
      this.phoneNumberErrrorMsg =
        'phone number should not be less than 10 digits';
      return { isInvalid: true };
    }
    if (control.value.length > 10) {
      this.phoneNumberErrrorMsg =
        'phone number should not be more than 10 digits';
      return { isInvalid: true };
    }
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let char of control.value) {
      console.log(char, numbers.indexOf(char));
      if (numbers.indexOf(char) == -1) {
        this.phoneNumberErrrorMsg = 'phone number should contain only digits ';

        return { isInvalid: true };
      }
    }

    return null;
  }

  isEmailAddressAvailabe(
    control: FormControl
  ): Promise<any> | Observable<any> | null {
    const response = new Promise((reslove, reject) => {
      // https call to backend to check whether email is avaible or not
    });
    return null;
  }

  //  isEmailAddressAvailabe(control:FormControl): Promise<any>  | Observable<any> {
  //   const response=new Promise((reslove,reject)=>{
  //    // https call to backend to check whether email is avaible or not
  //    if ()
  //   })
  //     }

  toggeleVisbility() {
    this.isText = !this.isText;
    this.isText
      ? (this.eyeIconClass = 'fa-eye')
      : (this.eyeIconClass = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  isFieldValid(controlName: string): boolean {
    return (
      this.SignUpForm.controls[controlName].dirty &&
      this.SignUpForm.hasError('required', controlName)
    );
  }
  onSubmit() {
    if (this.SignUpForm.valid) {
      const username = this.SignUpForm.value.Username;
      const password = this.SignUpForm.value.Password;
      const EmailID = this.SignUpForm.value.Email;
      const PhoneNumber = this.SignUpForm.value.PhoneNumber;
      const SignUpData = new signupModel(
        username,
        password,
        EmailID,
        PhoneNumber
      );
      
      this.auth.SignUp(SignUpData)
      .subscribe({
        next:(res)=>{
          alert(res?.message)
        },error:(err)=>{
          alert(err?.error.message)
        }
      })
    } else {
      validateForm.validateAllFormFeilds(this.SignUpForm);
    }
  }
}
