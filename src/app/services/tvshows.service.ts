import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl, apiBasekey } from "../constants/api";
import { map } from 'rxjs';
import { TvshowDTO } from '../model/tvshow';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private ApiUrl = apiBaseUrl;
  private apiBasekey = apiBasekey;
  constructor(private http: HttpClient) { }
  getTvShowsByType(type: string, count: number = 20) {
    return this.http.get<TvshowDTO>(`${this.ApiUrl}/tv/${type}?api_key=${this.apiBasekey}`).pipe(map((data) => data.results.slice(0, count)));
  }
}
