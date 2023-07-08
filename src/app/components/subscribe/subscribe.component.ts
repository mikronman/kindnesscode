import { Component } from '@angular/core';
import { HubspotService } from '../../services/hubspot.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

  constructor(private hubspotService: HubspotService) {}

  public submitted = false;

  subscribe(email: string) {
    this.hubspotService.subscribe(email).subscribe({
      next: (response) => {
        console.log('Subscription successful', response);
        this.submitted = true;
      },
      error: (error) => {
        console.error('Error subscribing', error);
      }
    });
  } 
}
