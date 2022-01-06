import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobile: boolean = false;
  constructor() { }
  ngOnInit(): void {
    if (window.screen.width < 600) { // 768px portrait
      this.mobile = true;
    }
  }
}
