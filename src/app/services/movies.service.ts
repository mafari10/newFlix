import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDTO } from '../model/movie';
import { apiBaseUrl, apiBasekey } from "../constants/api";
import { map } from 'rxjs';

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
}
