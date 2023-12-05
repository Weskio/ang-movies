import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService { 

  movieData =[{
    id:21211,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg'
  
   },
   {
    id:21211,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg'
  
   },
   {
    id:21211,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg'
  
   },
   {
    id:21211,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg'
  
   },
  ]

  getMoviesData(){
    return this.movieData
  }

  constructor() { }
}
