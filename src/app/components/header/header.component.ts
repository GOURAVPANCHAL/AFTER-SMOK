import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count = 0
  constructor(public mainService: MainServiceService) { }

  ngOnInit(): void {

    this.mainService.cartCount.subscribe(e => {
      this.count = e
    })
  }

  activeInactive(event) {
    let items: any = document.getElementsByClassName('navItem') as HTMLCollection
    for (let i = 0; i < items.length; i++) {
      let el = items.item(i) as HTMLElement
    }
  }
}
