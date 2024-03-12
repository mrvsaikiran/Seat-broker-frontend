import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';


export const isLoginCheckGuard: CanActivateFn = (route, state) => {

  if( inject(AuthService).isLoggedIn()){
   return true;
  }
  else{
    inject(Router).navigate(['/login'])
  }

};
