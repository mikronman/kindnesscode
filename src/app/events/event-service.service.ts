import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private apollo: Apollo) {}

  getEvents(): Observable<any> {
    const eventsQuery = gql`
        query {
            eventCollection {
            items {
                sys {
                    id
                  }
                  image {
                    fileName
                    url
                  }
                  title
                  description {
                    json
                  }
                  date
                  location
                  url
                }
            }
        }
    `;

    return this.apollo
        .watchQuery<any>({
            query: eventsQuery,
        })
        .valueChanges.pipe(map((result) => result.data.eventCollection.items));
  }
}
