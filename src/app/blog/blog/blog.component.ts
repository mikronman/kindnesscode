import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { BlogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SeoService } from '../../seo.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    
    const url = this.document.location.origin + this.router.url;
    this.seoService.setTitle('The Kindness Code Foundation Blog Post');
    this.seoService.setMetaTags([
      {name: 'keywords', content: 'Blog, Blog Post'},
      {name: 'description', content: `A Blog Post from The Kindness Code Foundation.`},
      {property: 'og:title', content: 'The Kindness Code Foundation Blog Post'},
      {property: 'og:description', content: `A Blog Post from The Kindness Code Foundation.`},
      {property: 'og:url', content: url}
    ]);

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.blogService.getBlogPost(id).subscribe({
        next: (post) => {
          this.post = post;
        },
        error: (error) => {
          console.error('Error:', error); // Add this line to log any errors
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/blog']);
  }

  ngOnDestroy() {
    this.seoService.clearMetaTags();
  }
}
