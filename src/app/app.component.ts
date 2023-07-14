import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100); // Delay of 100ms
      }
    });
  }

  title = 'The Kindness Code Foundation';
}
