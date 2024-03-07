import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class signupDataValidater{
    
    passwordValidater(password:string):string {

            const minLength = 8;
            const letterRegex = /[a-zA-Z]/;
            const numberRegex = /[0-9]/;
            let errorMsg='';
            // let valid=true;
            if (password.length < minLength) {
                // valid=false;
                errorMsg='password should be atleast 8 charecters' ;
                // return {isValid:valid ,ErrorMsg:errorMsg};
                return errorMsg;
            }
            if (!letterRegex.test(password)) {
                // valid=false;
                errorMsg="Your must contain atleat one digit";
                // return {isValid:valid ,ErrorMsg:errorMsg};
                return errorMsg;
               
            }
             if (!numberRegex.test(password)) {
                // valid=false;
                errorMsg="Your must contain atleat one special charecter";  
                // return {isValid:valid ,ErrorMsg:errorMsg};
                return errorMsg;  
            }  
            return '';  
    }

    EmailValidater(mailId:string):boolean{
    
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(mailId);
     

     
    }
      
    
}