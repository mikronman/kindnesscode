import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
    private router: Router
  ) {}

  ngOnInit() {
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
}
