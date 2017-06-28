import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./style/foundation.min.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){

  }
}