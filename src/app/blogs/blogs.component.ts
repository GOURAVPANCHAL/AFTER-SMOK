import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  images = [
    { name: 'Tulsi helps in curing respiratory problems and heart diseases.', id: '1', img: 'assets/images/amla-fruit-basket.png' },
    { name: 'grapes', id: '2', img: 'assets/images/grapes.png' },
    { name: 'garlic', id: '3', img: 'assets/images/garlic.png' },
    { name: 'hing', id: '4', img: 'assets/images/hing.png' },
    { name: 'haldi', id: '5', img: 'assets/images/haldi.png' },
    { name: 'sinhal', id: '6', img: 'assets/images/sinhal.png' },
    { name: 'SUGANDHMALA', id: '7', img: 'assets/images/SUGANDHMALA.png' },
    { name: 'TRIPHALA', id: '8', img: 'assets/images/TRIPHALA-removebg.png' },
    { name: 'TULSHI', id: '9', img: 'assets/images/TULSHI.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
    AOS.init();

  }

  mouseOver(id) {
    document.getElementById('text' + id).style.display = 'block'
  }

  mouseLeave(id) {
    document.getElementById('text' + id).style.display = 'none'
  }

}
