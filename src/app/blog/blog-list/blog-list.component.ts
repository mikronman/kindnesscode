import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { BlogService } from '../blog-service.service';
import { SeoService } from '../../seo.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogPosts: any[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) { }

  ngOnInit(): void {
    this.fetchBlogPosts();
    const url = this.document.location.origin + this.router.url;
    this.seoService.setTitle('The Kindness Code Foundation Blog');
    this.seoService.setMetaTags([
      {name: 'keywords', content: 'Blog'},
      {name: 'description', content: `Learn more about the story and principles behind this organization.`},
      {property: 'og:title', content: 'The Kindness Code Foundation Blog'},
      {property: 'og:description', content: `Learn more about the story and principles behind this organization.`},
      {property: 'og:url', content: url}
    ]);
  }

  fetchBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }

  ngOnDestroy() {
    this.seoService.clearMetaTags();
  }
}