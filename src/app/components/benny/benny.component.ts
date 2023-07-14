import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-benny',
  templateUrl: './benny.component.html',
  styleUrls: ['./benny.component.scss']
})
export class BennyComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router, 
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
    ) {}

  ngOnInit() {
    const url = this.document.location.origin + this.router.url;
    //console.log(url);
    this.metaService.addTags([
      {name: 'keywords', content: 'About Benny, Benny Obituary, Benny Memories'},
      {name: 'description', content: `Learn a little bit more about the life of Benny, and see a wall of memories.`},
      {property: 'og:title', content: 'About Benny'},
      {property: 'og:description', content: `Learn a little bit more about the life of Benny, and see a wall of memories.`},
      {property: 'og:url', content: url}
    ]);
  }

  ngOnDestroy () {
    this.metaService.removeTag("name='keywords'");
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:url'");
  }
}
