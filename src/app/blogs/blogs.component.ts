import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  images = [
    { name: 'Amlavatam', id: '1', img: 'assets/images/amla-fruit-basket.png' },
    { name: 'Draksha', id: '2', img: 'assets/images/grapes.png' },
    { name: 'Ugargandh', id: '3', img: 'assets/images/garlic.png' },
    { name: 'Hingu', id: '4', img: 'assets/images/hing.png' },
    { name: 'Hattvilasini', id: '5', img: 'assets/images/haldi.png' },
    { name: 'Sinhal', id: '6', img: 'assets/images/sinhal.png' },
    { name: 'Sugandhmala', id: '7', img: 'assets/images/SUGANDHMALA.png' },
    { name: 'Triphala', id: '8', img: 'assets/images/TRIPHALA-removebg.png' },
    { name: 'Holy Basil', id: '9', img: 'assets/images/TULSHI.jpg' }
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
