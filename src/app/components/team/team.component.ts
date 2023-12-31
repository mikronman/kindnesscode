import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  members = [
    {
      category: 'Leadership',
      image: '../../../assets/img/team/michael.jpg',
      name: 'Michael Kleczka',
      title: 'Founder & Chairman',
      bio: `A visionary kinda guy with experience in leading teams and building online applications. Michael is responsible for strategic direction and inspiring innovation with excellence, keeping cross-functional efforts aligned with KCF's mission, values and objectives.`
    },
    {
      category: 'Leadership',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Treasurer',
      title: 'Wanted',
      bio: `Manages the organization's finances, keeps accurate financial records, and ensures that the organization is financially stable and using its funds responsibly.`
    },
    {
      category: 'Leadership',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Marketing',
      title: 'Wanted',
      bio: `Builds and maintains the organization's public image, creates marketing campaigns to engage the target audience, and manages social media platforms to increase visibility and engagement.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Fundraising Coordinator',
      title: 'Wanted',
      bio: `Responsible for planning and implementing strategies to raise money for the organization. This includes planning events, writing grant proposals, and soliciting donations from individuals and companies.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Outreach Coordinator',
      title: 'Wanted',
      bio: `Act as a liaison between the organization and the community it serves. This includes forging partnerships with other organizations, representing the organization at community events, and bringing in new supporters and volunteers.`
    },
    {
      category: 'Partnerships',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Investors',
      title: 'Wanted',
      bio: `Partners providing essential capital and strategic resources to help us scale our projects and deepen our impact. Their insights and connections accelerate our growth and enable us to reach more children with our innovative educational experiences.`
    },
    {
      category: 'Volunteers',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Volunteers',
      title: 'Wanted',
      bio: `Assist in various capacities as needed, from helping at events to administrative tasks. Their role is flexible based on the organization's needs and their own skills and interests.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Content Writers',
      title: 'Wanted',
      bio: `Develop engaging content for the organization's various platforms, including the website, social media, and email newsletters. This could include blog posts, videos, graphics, and more.`
    },
    {
      category: 'Partnerships',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Program Advisors',
      title: 'Wanted',
      bio: `Provides strategic advice on the organization's programs and initiatives, ensures that they align with the organization's mission, and recommends improvements to enhance their impact and reach.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Developers',
      title: 'Wanted',
      bio: `Create, test, and maintain software for the organization, including the interactive online platform. They collaborate with others to turn the organization's vision into a functional and user-friendly digital experience.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'App Designers',
      title: 'Wanted',
      bio: `Creatives who are responsible for visually shaping our platform and storytelling experience. They create the user interfaces, design the look and feel of our applications, and help develop a captivating and immersive user experience.`
    },
    {
      category: 'Positions',
      image: '../../../assets/img/team/placeholder_person.svg',
      name: 'Illustrators',
      title: 'Wanted',
      bio: `Artists who bring our narratives and characters to life through visual art. They work closely with our writers and designers to create engaging, colorful, and vibrant illustrations that resonate with our young audience and enhance the storytelling experience.`
    }
  ];

  categories = ['Leadership', 'Partnerships', 'Volunteers', 'Positions'];

  getMembersByCategory(category: string) {
    return this.members.filter(member => member.category === category);
  }
  

  constructor(
    private router: Router, 
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
    ) {}

    ngOnInit() {
      const url = this.document.location.origin + this.router.url;
      this.seoService.setTitle('The Kindness Code Foundation Team');
      this.seoService.setMetaTags([
        {name: 'keywords', content: 'Team, The Kindness Code Foundation, Help'},
        {name: 'description', content: `Learn more about the Kindness Code Foundation Team!`},
        {property: 'og:title', content: 'The Kindness Code Foundation Team'},
        {property: 'og:description', content: `Learn more about the Kindness Code Foundation Team!`},
        {property: 'og:url', content: url}
      ]);
    }
  
    ngOnDestroy() {
      this.seoService.clearMetaTags();
    }

}
