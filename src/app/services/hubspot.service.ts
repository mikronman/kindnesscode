// hubspot.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HubspotService {
  private serverApiUrl = 'http://localhost:8080/api/subscribe';

  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    const body = { email: email };
    return this.http.post(this.serverApiUrl, body);
  }
}
