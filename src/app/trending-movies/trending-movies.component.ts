import { Component, Input } from '@angular/core';
import { MovieCard } from '../movie-card';

@Component({
  selector: 'app-trending-movies',
  standalone: true,
  imports: [],
  templateUrl: './trending-movies.component.html',
  styleUrl: './trending-movies.component.css'
})
export class TrendingMoviesComponent {

  @Input() trendyMovie! :MovieCard

}
