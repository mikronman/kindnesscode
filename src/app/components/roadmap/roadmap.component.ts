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
      desc: 'We will continue developing our online presence via the website and social media. From there we will plan to establish awareness campaigns around digital ethics and empathy. Long term we envision greater community building and partnerships that synergize with our mission and vision.'
    },
    {
      title: 'Program Development',
      desc: `Our vision involves four key strategies. First, we aim to develop educational resources that merge coding with digital ethics. Second, we will address community needs, offering empathetic coding workshops and ethical digital behavior campaigns. Third, we're committed to forming strategic partnerships to amplify our impact. Lastly, through our advocacy, we inspire ethical behavior, encouraging kindness both online and offline.`
    },
    {
      title:  'Business & Legal',
      desc: 'We plan to file as a 501c3 entity, securing tax-exempt status. From there we can set up business accounts and begin integrating platforms to accept donations.'
    },
    {
      title:  'Team Building',
      desc: 'We will be working to fulfill initial key roles to get bigger initiatives off the ground. We will be working on a clear organizational structure as well as collaboration processes and tooling. Long term we will establish a board of directors and advisors, creating bylaws and governance policies.'
    },
    {
      title:  'Finances',
      desc: 'As we grow we will need to establish sound financial planning and accounting. We will be orchestrating fundraising events, working for donations, grants and sponsorships.'
    },
    {
      title:  'Technology',
      desc: 'We have a lot of work ahead of us in developing platforms to manage events, partnerships, volunteers and generous donors. We will need to establish a secure payment system to collect donations and provide transparent reporting and analytics. We will also need to build more internal services to manage the growing org.'
    },
    {
      title:  'Data & Metrics',
      desc: 'If successfully built and managed we expect to provide meaningful data around how we are using donations to impact society - data collection methods, impact framework and impact rubric.'
    },
    {
      title:  'Innovation',
      desc: `We aim to cultivate kindness in cyberspace, merging empathy principles with foundational programming knowledge. We're focused on devising an effective curriculum and a novel method for quantifying the social impact of each donation. Through innovative approaches, we strive to offer a unique experience to our communities.`
    }
  ];
}
