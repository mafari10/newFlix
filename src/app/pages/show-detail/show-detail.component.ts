import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit {
  show_id: string = '';
  show$: Observable<Movie> | null = null;

  constructor(private router: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    // You can use the subscribe method
    this.router.params.subscribe(params => this.show_id = params['id']);
    // or snapshot this may not work if there are a lot of async code used in it.
    // this.show_id = this.router.snapshot.params['id'];

    this.show$ = this.moviesService.getMovieById(this.show_id);
  }
}
