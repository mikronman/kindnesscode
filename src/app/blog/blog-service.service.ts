import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apollo: Apollo) {}

  getBlogPosts(): Observable<any> {
    const blogPostsQuery = gql`
      query {
        blogCollection {
          items {
            sys {
              id
            }
            contentfulMetadata {
              tags {
                id
              }
            }
            title
            blogImage {
              url
            }
            shortDescription {
              json
            }
            authorName
          }
        }
      }
    `;

    return this.apollo
      .watchQuery<any>({
        query: blogPostsQuery,
      })
      .valueChanges.pipe(map((result) => result.data.blogCollection.items));
  }

  getBlogPost(id: string): Observable<any> {
    const blogPostQuery = gql`
      query blogPostQuery($id: String!) {
        blog(id: $id) {
          sys {
            id
          }
          title
          blogImage {
            url
          }
          body {
            json
          }
          authorName
          authorBio {
            json
          }
        }
      }
    `;
  
    return this.apollo
      .watchQuery<any>({
        query: blogPostQuery,
        variables: {
          id: id,
        },
      })
      .valueChanges.pipe(map((result) => result.data.blog));
  }
}
