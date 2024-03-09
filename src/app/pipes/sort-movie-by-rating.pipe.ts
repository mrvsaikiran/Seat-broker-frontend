import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Models/Movie';

@Pipe({
  name: 'sortMovieByRating',
  standalone: true
})
export class SortMovieByRatingPipe implements PipeTransform {

  transform(movies: Movie[]): Movie[] {
    if (!movies || movies.length === 0) {
      return [];
    }
    return movies.sort((a, b) => b.rating - a.rating);
  }

}
