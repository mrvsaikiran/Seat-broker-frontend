import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  type:string ='password';
  isText:boolean= false;
  eyeIconClass:string = 'fa-eye-slash'
   constructor(){}

   toggeleVisbility(){
      this.isText=!this.isText;
      this.isText ? this.eyeIconClass='fa-eye': this.eyeIconClass='fa-eye-slash';
      this.isText ? this.type ="text" :this.type ="password";
   }

}
