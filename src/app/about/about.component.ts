import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mobile = false
  data: any;
  constructor(private getDataAPI: GetApiService) { }

  ngOnInit(): void {
    this.getDataFromAPI()
  }
  getDataFromAPI() {
    throw new Error('Method not implemented.');
  }

}
