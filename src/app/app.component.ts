import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor() {
  }
  ngOnInit(): void {

  }
}


