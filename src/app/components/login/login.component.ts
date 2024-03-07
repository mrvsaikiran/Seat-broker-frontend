import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
