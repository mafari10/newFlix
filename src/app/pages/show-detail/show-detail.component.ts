import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { SliderComponent } from "../../components/slider/slider.component";
import { TabViewModule } from 'primeng/tabview';
import { imgBySize } from '../../constants/imageUrl';
import { Video } from '../../model/videos';
import { VideoEmbedComponent } from "../../components/video-embed/video-embed.component";
import { ImageModule } from 'primeng/image';
import { Images } from '../../model/images';
import { CarouselModule } from 'primeng/carousel';
import { Actor } from '../../model/genre';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [JsonPipe, CommonModule, CarouselModule, ImageModule, AsyncPipe, SliderComponent, TabViewModule, VideoEmbedComponent],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit {
  show_id: string = '';
  show$: Observable<Movie> | null = null;
  imagesSize = imgBySize;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Images[]> | null = null;
  showActors$: Observable<Actor[]> | null = null;

  private router = inject(ActivatedRoute);
  private moviesService = inject(MoviesService);


  ngOnInit(): void {
    // You can use the subscribe method
    // this.router.params.subscribe(params => this.show_id = params['id']);
    // or snapshot this may not work if there are a lot of async code used in it.
    this.show_id = this.router.snapshot.params['id'];
    this.show$ = this.moviesService.getMovieById(this.show_id);
    this.showVideos$ = this.moviesService.getMovieVideos(this.show_id);
    this.showImages$ = this.moviesService.getMovieImages(this.show_id);
    this.showActors$ = this.moviesService.getMovieCredit(this.show_id);
  }
}
