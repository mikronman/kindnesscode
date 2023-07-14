import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      const url = (event as NavigationEnd).urlAfterRedirects;
      this.setTitleAndMeta(url);
    });
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  setMetaTags(tags: Array<{name: string, content: string}|{property: string, content: string}>) {
    tags.forEach(tag => {
      if ('name' in tag) {
        this.metaService.updateTag({ name: tag.name, content: tag.content });
      } else if ('property' in tag) {
        this.metaService.updateTag({ property: tag.property, content: tag.content });
      }
    });
  }

  clearMetaTags() {
    const metaTags = this.metaService.getTags('meta');
    for (const tag of metaTags) {
      this.metaService.removeTagElement(tag);
    }
  }

  private setTitleAndMeta(url: string) {
    const title = 'Title for ' + url;
    const description = 'Description for ' + url;
    const keywords = 'keywords for ' + url;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:url', content: url });
  }

}
