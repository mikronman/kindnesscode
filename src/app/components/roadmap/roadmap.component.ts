import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { SeoService } from 'src/app/seo.service';

interface RoadmapItem {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  faSquare = faSquare;
  roadmapItems: RoadmapItem[] = [
    {
      title: 'Engagement Strategies',
      desc: `We're amping up our online game through our website and social media, and planning awareness campaigns about digital ethics and empathy. In the future, we're all about growing our community and making partnerships that mesh with our mission.`
    },
    {
      title: 'Program Development',
      desc: `We are in the initial stages of program development, exploring a blend of unique and ambitious ideas, some readily achievable and others that push the boundaries of innovation.`
    },
    {
      title:  'Business & Legal',
      desc: `We’re planning to register as a 501c3 entity to get tax-exempt status, which lets us set up business accounts and start getting donations.`
    },
    {
      title:  'Team Building',
      desc: `We're focused on key partnerships, advisors and experts who can help us research, develop, market and launch our first program. Along our initial journey we will be seeking volunteers willing to help at various capacities while we get this off the ground.`
    },
    {
      title:  'Finances',
      desc: `As we get bigger, we’ll be setting up solid financial planning and accounting. We’ll also be organizing fundraisers, and working towards getting donations, grants, and sponsorships.`
    },
    {
      title:  'Swaaaaaag',
      desc: `We plan to design and sell cool hats, shirts and other merch - all proceeds going back into the organiztion to support the critical programs we are developing.`
    },
    {
      title:  'Technology',
      desc: `We’ve got a lot to do developing platforms to manage events, partnerships, volunteers, and generous donors. We need to set up a secure payment system for donations and transparent reporting and analytics. We’ll also build more services to manage our growing organization.`
    },
    {
      title:  'Data & Metrics',
      desc: `With all our efforts, we aim to provide meaningful data about how we use donations to make an impact. This involves figuring out how we’ll collect data, and developing our impact framework and rubric.`
    },
    {
      title:  'Innovation',
      desc: `We're excited about bringing kindness into the world of cyberspace. Our goal is to create a curriculum that blends empathy with coding basics. We're also developing a new way to measure the social impact of each donation. We're confident these fresh approaches will offer a unique experience to our communities.`
    },
    {
      title:  'Research',
      desc: `There's a lot to learn, and many successful companies that grew to make a huge impact in the world. We'd love to learn from them through ongoing market research, interviews and partnerships.`
    },
  ];

  constructor(
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

    ngOnInit() {
      const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('The Kindness Code Foundation Roadmap');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'The Kindness Code Foundation, Roadmap'},
        {name: 'description', content: `Learn more about the Kindness Code Foundation Roadmap!`},
        {property: 'og:title', content: 'The Kindness Code Foundation Roadmap'},
        {property: 'og:description', content: `Learn more about the Kindness Code Foundation Roadmap!`},
        {property: 'og:url', content: url}
      ]);
    }
  
    ngOnDestroy() {
      this.seoService.clearMetaTags();
    }
}
