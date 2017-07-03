import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-movie-card',
  templateUrl: './small-movie-card.component.html',
  styleUrls: ['./small-movie-card.component.css']
})
export class SmallMovieCardComponent implements OnInit {
  @Input() movie: any;

  constructor() { }

  ngOnInit() {
  }

}
