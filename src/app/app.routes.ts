import {  Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
 

export const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'home',
        component:HomeComponent,
        children:[{
           path:':city',
           component:MoviesListComponent
        }]
    },
    {
        path:'movie',
        component:ShowsListComponent
    },
    {
        path:'',
        redirectTo:'/Home',
        pathMatch:'full'
    },
    {
       path:'**',
       component:AppComponent  
    }

];
