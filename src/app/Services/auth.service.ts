import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../Models/login';
import { signupModel } from '../Models/signup';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl:string="https://localhost:7183/api/User/";

  constructor(private http:HttpClient,private router:Router) {  }

 SignUp(signUpObj:signupModel){
  return this.http.post<any>(`${this.BaseUrl}register`,signUpObj);
 }

 login(LoginObj:loginModel){
  return this.http.post<any>(`${this.BaseUrl}authenticate`,LoginObj);
 }

 logOut(){
  localStorage.clear();
  this.router.navigate(['login']);
  
 }

 StoreToken(TokenValue:string){
  localStorage.setItem('Token',TokenValue);
 }

 getToken(){
  return localStorage.getItem('Token');
 }
 isLoggedIn(){
  return this.getToken()!=null

 }

}  
