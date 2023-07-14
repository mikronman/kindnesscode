import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-benny',
  templateUrl: './benny.component.html',
  styleUrls: ['./benny.component.scss']
})
export class BennyComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

  ngOnInit() {
    const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('Who is Benny?');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'Benny Kleczka, Who is Benny, Benny, Kindness'},
        {name: 'description', content: `Learn more about who this organization is built upon, his spirit of kindness.`},
        {property: 'og:title', content: 'Who is Benny?'},
        {property: 'og:description', content: `Learn more about who this organization is built upon, his spirit of kindness.`},
        {property: 'og:url', content: url}
      ]);
  }

  ngOnDestroy () {
    this.seoService.clearMetaTags();
  }
}
