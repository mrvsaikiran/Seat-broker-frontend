import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/Movie';

@Injectable({providedIn: 'root'})
export class MovieService {
  baseUrl:string = "https://localhost:7183/api";
  constructor(private http:HttpClient){ }

  post(url: string, requestBody: any) {
    return this.http.post(url, requestBody);
  }

  getAllCities() :Observable<string[]> {
    let url = this.baseUrl + "/Theater/GetAllCities";
    return this.http.get<string[]>(url);
  }
  getMovieDetails(city:string) :Observable<Movie[]> {
    let url = this.baseUrl + `/Movie/getMovieByCity/:location = ${city}`;
    return this.http.get<Movie[]>(url);
  }

}
