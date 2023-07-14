import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from '../components/subscribe/subscribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- add this
    FontAwesomeModule // <-- add this
  ],
  exports: [SubscribeComponent]
})
export class SharedModule { }
