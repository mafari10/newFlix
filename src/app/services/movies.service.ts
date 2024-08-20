import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDTO } from '../model/movie';
import { apiBaseUrl, apiBasekey } from "../constants/api";
import { map } from 'rxjs';
import { Video, VideoDto } from '../model/videos';
import { videoUrl } from '../constants/videoUrl';
import { movieImage } from '../constants/imageUrl';
import { ImagesDTO } from '../model/images';
import { CreditsDto } from '../model/genre';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private ApiUrl = apiBaseUrl;
  private apiBasekey = apiBasekey;
  constructor(private http: HttpClient) { }
  getMoviesByType(type: string, count: number = 20) {
    return this.http.get<MoviesDTO>(`${this.ApiUrl}/movie/${type}?api_key=${this.apiBasekey}`).pipe(map((data) => data.results.slice(0, count)));
  }
  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.ApiUrl}/movie/${id}?api_key=${this.apiBasekey}`);
  }
  getMovieVideos(id: string) {
    return this.http.get<VideoDto>(`${videoUrl}/${id}/videos?api_key=${this.apiBasekey}`).pipe(map(data => data.results))
  }
  getMovieImages(id: string) {
    return this.http.get<ImagesDTO>(`${movieImage}${id}/images?api_key=${this.apiBasekey}`).pipe(map(data => data.backdrops))
  }
  getMovieCredit(id: string) {
    return this.http.get<CreditsDto>(`${movieImage}${id}/credits?api_key=${this.apiBasekey}`).pipe(map(data => data.cast))
  }

}
