import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MovieService } from '../../Services/movie.service';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,NavbarComponent,MovieService, ActivatedRoute],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cities: string[] = [];
  movies: Movie[] =[];
  selectedCity: string = "";
  constructor(private router: Router, private service: MovieService, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((params:any) => {
        params.get("city")
    })
  }

  navigateToAllCities() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.service.getAllCities().subscribe((cities: string[]) =>
      {
        this.cities = cities;
      });
   }
   onCitySelection(city: string) {
      this.selectedCity = city;
      this.service.getMovieDetails(city);
   }
}
