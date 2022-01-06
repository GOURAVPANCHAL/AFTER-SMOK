import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  blogId: any;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.blogId = this.route.snapshot.params['id'];
    console.log(this.blogId);
  }
}
