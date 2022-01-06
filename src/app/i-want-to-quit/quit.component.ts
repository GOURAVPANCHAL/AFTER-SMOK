import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.component.html',
  styleUrls: ['./quit.component.css']
})
export class QuitComponent implements OnInit {
  quitType: any;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.quitType = this.activatedroute.snapshot.params['type'];
    console.log(this.quitType);
  }

}
