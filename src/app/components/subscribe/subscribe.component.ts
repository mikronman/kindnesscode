import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HubspotService } from '../../services/hubspot.service';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit, OnDestroy {

  faHandHoldingHeart = faHandHoldingHeart;
  public submitted = false;
  public errorMessage = '';
  subscribeForm!: FormGroup;

  constructor(
    private hubspotService: HubspotService, 
    private formBuilder: FormBuilder,
    ) {}

    subscribe(formData: any) {
      const email = formData.email;
      this.hubspotService.subscribe(email).subscribe({
        next: (response) => {
          console.log('Subscription successful', response);
          this.submitted = true;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Error subscribing', error);
          this.errorMessage = 'The email address you entered may be invalid or is already in our system. If you continue to experience this issue, please contact us directly at: care@thekindnesscodefoundation.com';
        }
      });
    }

  ngOnInit() {
    this.subscribeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnDestroy () {
  }
}
