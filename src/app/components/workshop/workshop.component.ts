import { Component, AfterViewInit, OnInit, Inject, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '../../seo.service';

declare var bootstrap: any; // add this line to use Bootstrap JS in Angular

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements AfterViewInit {

  accordionData = [
    {
      header: 'Kind Voices Project',
      content: 'app-voices',
      id: 'voices'
    },
    {
      header: 'The Adventures of Sophie and Ben',
      content: 'app-ben',
      id: 'adventures'
    },
    {
      header: "Ben's Brain - Interactive AI Experience",
      content: 'app-brain',
      id: 'brain'
    },
    {
      header: "Kindness in Action",
      content: 'app-action',
      id: 'action'
    },
    {
      header: "Digital Kindness Initiative",
      content: "app-digital",
      id: 'digital'
    },
    {
      header: "Benny's Book Club",
      content: 'app-books',
      id: 'book'
    },
    {
      header: "Camp Kind",
      content: 'app-camp',
      id: 'camp'
    }
  ]


  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

    ngOnInit() {
      const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('The Kindness Code Foundation Workshop');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'Workshop, Ideas, Concepts, The Kindness Code Foundation'},
        {name: 'description', content: `Learn more about the Kindness Code Foundation's Ideas!`},
        {property: 'og:title', content: 'The Kindness Code Foundation Workshop'},
        {property: 'og:description', content: `Learn more about the Kindness Code Foundation's Ideas!`},
        {property: 'og:url', content: url}
      ]);
    }
  
    ngOnDestroy() {
      this.seoService.clearMetaTags();
    }

  ngAfterViewInit(): void {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
      accordion.addEventListener('hidden.bs.collapse', () => {
        this.viewportScroller.scrollToPosition([0, 0]); // or any other position
      });

      accordion.addEventListener('shown.bs.collapse', (event: any) => {
        const accordionHeader = event.target.parentElement;
        const topOffset = accordionHeader.getBoundingClientRect().top;
        window.scrollBy({
          top: topOffset - 100, // adjust the offset as you need
          behavior: "smooth"
        });
      });
    });
  }
}
