import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { NgFor } from '@angular/common';
import { MovieDataService } from '../movie-data.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [FontAwesomeModule, MovieCardComponent, NgFor]
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

}
