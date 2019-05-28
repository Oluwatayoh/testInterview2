import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovies } from '../model/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _url: string = "assets/data/movies.json";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this._url);
  }

  postMovies(moviesData) {
    return this.http.post<any>(this._url, moviesData);
  }

  deleteMovies(id: number) {
    return this.http.delete(`${this._url}/movies/${id}`);
  }

  updateMovies(moviesData) {
    return this.http.put<any>(this._url, moviesData);
  }
}
