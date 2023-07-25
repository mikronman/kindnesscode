// hubspot.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class HubspotService {
  private serverApiUrl = environment.serverApiUrl;

  constructor(private http: HttpClient) {}

  subscribe(firstName: string, lastName: string, email: string, interests: string[], message: string) {
    // Collect the data in the same format as the backend expects
    const data = {
      firstName,
      lastName,
      email,
      interests,
      message
    };
  
    // Make the POST request
    return this.http.post('http://localhost:8080/api/subscribe', data);
  }
  
}
