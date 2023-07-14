import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

    ngOnInit() {
      const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('Welcome to The Kindness Code Foundation');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'About The Kindness Code, Values, Mission, Vision, What We Do, Unique'},
        {name: 'description', content: `Learn More About The Kindness Code Foundation's core values, mission and much more!`},
        {property: 'og:title', content: 'About The Kindness Code Foundation'},
        {property: 'og:description', content: `Learn More About The Kindness Code Foundation's core values, mission and much more!`},
        {property: 'og:url', content: url}
      ]);
    }
  
    ngOnDestroy() {
      this.seoService.clearMetaTags();
    }
}
