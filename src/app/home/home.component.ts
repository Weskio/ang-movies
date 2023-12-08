import { Component, ViewEncapsulation, inject, ChangeDetectorRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { NgFor, NgIf } from '@angular/common';
import { MovieDataService } from '../movie-data.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TrendingMoviesComponent } from "../trending-movies/trending-movies.component";
import { defer } from 'rxjs';
import { MovieCard } from '../movie-card';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [FontAwesomeModule, MovieCardComponent, NgFor, TrendingMoviesComponent,FormsModule, NgIf]
})
export class HomeComponent {
 faCoffee =faCoffee
 faHouse =faHouse
 faFilm =faFilm
 faClapperboard =faClapperboard
 faBookmark=faBookmark
 faPlay=faPlay
 faMagnifyingGlass= faMagnifyingGlass

 movies = inject(MovieDataService)
 movieCards = this.movies.getMoviesData()
 filteredMovies: MovieCard[] = this.movieCards;

 searchResults =false
   

 filterResults(text:string){
  this.searchResults=true
  this.filteredMovies =this.movieCards.filter(
    movie => movie?.title.toLowerCase().includes(text.toLowerCase())
   )
 }

  trendyMovies =this.movies.getTrendyMovies()

}
