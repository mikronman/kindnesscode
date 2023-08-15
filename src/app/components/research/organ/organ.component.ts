import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { SeoService } from 'src/app/seo.service';

@Component({
  selector: 'app-organ',
  templateUrl: './organ.component.html',
  styleUrls: ['./organ.component.scss']
})
export class OrganComponent {

  stats = [
    { number: '104K', class: "one", description: `children, women and men are waiting for transplants.` },
    { number: '17', class: "two", description: `people die every day waiting for a transplant.` },
    { number: '8', class: "three", description: `lives can be saved by one donor.` },
    { number: '75', class: "four", description: `lives can be enhanced by one donor.` },
  ];

  constructor(
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

    ngOnInit() {
      const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('Organ Donations');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'Organ Donor, Organ Donation'},
        {name: 'description', content: `Learn how to become an organ donor!`},
        {property: 'og:title', content: 'Organ Donations'},
        {property: 'og:description', content: `Learn how to become an organ donor!`},
        {property: 'og:url', content: url}
      ]);
    }
  
    ngOnDestroy() {
      this.seoService.clearMetaTags();
    }
}
