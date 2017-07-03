import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'movieFilterAll' })

export class MovieAllPipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null) {
      return movies;
    }
    let keysObject = Object.keys(movies[0]);
    return movies.filter(function(movie){
       return keysObject.map((key) => {
         console.log(key);
        return  movie[key].toString().toLowerCase().includes(searchText.toLowerCase())
      })
    });
  }
}
