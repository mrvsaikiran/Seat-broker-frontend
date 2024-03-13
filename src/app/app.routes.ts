import {  Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MovieTicketComponent } from './components/movie-ticket/movie-ticket.component';
import { isLoginCheckGuard } from './Guards/is-login-check.guard';
import { SeatsArrangmentComponent } from './components/seats-arrangment/seats-arrangment.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
 

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
        path:'forgot',
        component:ForgotPasswordComponent
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
        path:'seat',
        component:SeatsArrangmentComponent
    },
    {
        path:'ticket',
        component:MovieTicketComponent,
        canActivate:[isLoginCheckGuard]
    },
    {
        path:'feedback',
        component:FeedbackComponent
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
