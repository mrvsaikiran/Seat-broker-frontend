import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../Models/login';
import { signupModel } from '../Models/signup';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl:string="https://localhost:7183/api/User/";

  constructor(private http:HttpClient) {  }

 SignUp(signUpObj:signupModel){
  return this.http.post<any>(`${this.BaseUrl}register`,signUpObj);
 }

 login(LoginObj:loginModel){
  return this.http.post<any>(`${this.BaseUrl}authenticate`,LoginObj);

 }

}  
