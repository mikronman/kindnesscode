import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { EventService } from '../event-service.service';
import { SeoService } from '../../seo.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) { }

  ngOnInit(): void {
    this.fetchBlogPosts();
    const url = this.document.location.origin + this.router.url;
    this.seoService.setTitle('The Kindness Code Foundation Events');
    this.seoService.setMetaTags([
      {name: 'keywords', content: 'Events'},
      {name: 'description', content: `Learn more how we are participating in other events.`},
      {property: 'og:title', content: 'The Kindness Code Foundation Events'},
      {property: 'og:description', content: `Learn more how we are participating in other events.`},
      {property: 'og:url', content: url}
    ]);
  }

  fetchBlogPosts(): void {
    this.eventService.getEvents().subscribe((posts) => {
      this.events = posts;
    });
  }

  ngOnDestroy() {
    this.seoService.clearMetaTags();
  }
}