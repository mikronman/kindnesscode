import { Component } from '@angular/core';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

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
      desc: `We've got four big strategies. One, creating educational resources that blend coding and digital ethics. Two, tackling community needs with coding workshops and campaigns promoting ethical digital behavior. Three, making partnerships to widen our reach and impact. Four, advocating for ethical behavior to inspire kindness both online and offline.`
    },
    {
      title:  'Business & Legal',
      desc: `We’re planning to register as a 501c3 entity to get tax-exempt status, which lets us set up business accounts and start getting donations.`
    },
    {
      title:  'Team Building',
      desc: `We’re in the process of filling important roles to get bigger projects started. We’re figuring out our organizational structure, how we’ll work together, and what tools we need. Later on, we'll establish a board of directors and advisors, and set up bylaws and governance policies.`
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
    }
    
  ];
}
