import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from '../blogs';
import {BlogService} from '../blog.service'

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs = blogs;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
  }

}
