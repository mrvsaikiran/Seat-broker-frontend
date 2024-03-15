import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Movie } from '../../Models/Movie';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SortMovieByRatingPipe } from '../../pipes/sort-movie-by-rating.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CarouselModule,TagModule,ButtonModule,CommonModule,RatingModule,FormsModule,SortMovieByRatingPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  products: Movie[] = [
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    },
    { 
      id:2,
      title:'sahoo',
      genre: 'Action',
     
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMmUzYmNjZjctYTYwOC00ZDQ1LWE5ZjctNmQzYTAxMGYwOTI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', 
      language: 'telugu',
      duration: 169 ,
      rating:3
    }

  ];

    responsiveOptions: any[] = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    constructor(private router:Router){}
    BookTicketsForMovie(){
        this.router.navigate(['movie'])
    }
}
