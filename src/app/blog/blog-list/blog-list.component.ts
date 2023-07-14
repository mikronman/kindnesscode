import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchBlogPosts();
  }

  fetchBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }

}
