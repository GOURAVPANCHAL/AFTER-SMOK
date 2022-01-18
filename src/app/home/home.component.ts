import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobile: boolean = false;
  constructor() { }
  ngOnInit(): void {
    AOS.init();
    if (window.screen.width < 600) { // 768px portrait
      this.mobile = true;
    }
  }
}
