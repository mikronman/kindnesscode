import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HubspotService } from '../../services/hubspot.service';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  faHandHoldingHeart = faHandHoldingHeart;
  public submitted = false;
  public errorMessage = '';
  subscribeForm!: FormGroup;

  constructor(
    private hubspotService: HubspotService, 
    private formBuilder: FormBuilder,
    ) {}

    interests = [
      {label: 'News and updates', value: 'news'},
      {label: 'Volunteering', value: 'volunteering'},
      {label: 'Partnership', value: 'positions'},
      {label: 'Donating', value: 'donating'}
    ];

  subscribe(formData: any) {
    const { firstName, lastName, email, message } = formData;
  
    // Get the selected checkboxes
    const selectedInterests = this.interests
      .filter(interest => formData[interest.value])  // Get only the checked interests
      .map(interest => interest.value);  // Get the value of the checked interests
  
    this.hubspotService.subscribe(firstName, lastName, email, selectedInterests, message)
      .subscribe({
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
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['']
      });
      this.interests.forEach(interest => this.subscribeForm.addControl(interest.value, new FormControl(false)));
    }

}
