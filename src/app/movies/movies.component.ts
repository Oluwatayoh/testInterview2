import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  public movies = [];
  subscription: Subscription;
  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
   this.subscription = this._moviesService.getMovies()
      .subscribe(data => this.movies = data);
      console.log(this.movies);
  } 

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
