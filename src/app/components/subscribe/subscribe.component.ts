import { Component } from '@angular/core';
import { HubspotService } from '../../services/hubspot.service';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

  faHandHoldingHeart = faHandHoldingHeart;

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
