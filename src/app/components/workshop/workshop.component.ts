import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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
      id: 'collapseOne'
    },
    {
      header: 'The Adventures of Sophie and Ben',
      content: 'app-ben',
      id: 'collapseTwo'
    },
    {
      header: "Ben's Brain - Interactive AI Experience",
      content: 'app-brain',
      id: 'collapseThree'
    },
    {
      header: "Kindness in Action",
      content: 'app-action',
      id: 'collapseFour'
    },
    {
      header: "Benny's Book Club",
      content: 'app-books',
      id: 'collapseFive'
    },
  ]

  constructor(private viewportScroller: ViewportScroller) { }

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
