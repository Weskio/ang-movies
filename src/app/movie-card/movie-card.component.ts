import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MovieCard } from '../movie-card';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
 faPlay =faPlay
 @Input() movieCard!: MovieCard

}
