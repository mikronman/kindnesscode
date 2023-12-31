import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogComponent },
];

@NgModule({
  declarations: [
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogModule { }
