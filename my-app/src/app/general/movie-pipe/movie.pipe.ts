import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'movieFilter' })
export class MoviePipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null) {
      return movies;
    }
    return movies.filter(function(movie){
      return movie.title.toLowerCase().includes(searchText.toLowerCase());
    })
  }
}
