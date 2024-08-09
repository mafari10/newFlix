import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { TvshowsService } from '../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../model/tvshow';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private moviesService: MoviesService, private tvShowService: TvshowsService) { }
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12);
  popularTvShows$ = this.tvShowService.getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies));
}
