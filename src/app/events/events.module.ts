import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

const eventRoutes: Routes = [
  { path: 'events', component: EventsComponent },
];

@NgModule({
  declarations: [
    EventsComponent,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(eventRoutes)
  ]
})
export class EventsModule { }
