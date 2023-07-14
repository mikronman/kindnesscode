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

  subscribe(email: string): Observable<any> {
    //console.log(environment);
    const body = { email: email };
    return this.http.post(this.serverApiUrl, body);
  }
}
