import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cities: {name:string }[] = [
    { name: 'Mumbai' },
    { name: 'Delhi-NCR' },
    { name: 'Bengaluru' },
    { name: 'Hyderabad' },
    { name: 'Ahmedabad' },
    { name: 'Chandigarh' },
    { name: 'Chennai' },
    { name: 'Pune' },
    { name: 'Kolkata' },
    { name: 'Kochi' }
  ];

  constructor(private router: Router) {}

  navigateToAllCities() {
    this.router.navigate(['/home']);
  }

}
