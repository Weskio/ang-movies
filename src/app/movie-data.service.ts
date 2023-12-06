import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService { 

  movieData =[{
    id:1,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg',
      trendy:true
   },
   {
    id:2,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg',
      trendy:true
   },
   {
    id:3,
      category:'nAIJA rAPP',
      title:'Thankful',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg',
      trendy:false
   },
   {
    id:4,
      category:'nAIJA rAPP',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Ff0c96263caf6a4bbc265053e5bc68f1c.1000x1000x1.jpg',
      trendy:true
   },
   {
    id:5,
      category:'',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fbe55aee3a7ba2bda6add24235cd25685.1000x1000x1.png',
      trendy:false
   },

   {
    id:5,
      category:'',
      title:'Badman bOUNCE',
      rate:'18+',
      year:2023,
      image:'https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2Fbe55aee3a7ba2bda6add24235cd25685.1000x1000x1.png',
      trendy:true
   },

  ]

  getMoviesData(){
    return this.movieData.filter(movie => movie.trendy ===false)
  }

  getTrendyMovies(){
    return this.movieData.filter(movie => movie.trendy ===true)
  }

  constructor() { }
}
