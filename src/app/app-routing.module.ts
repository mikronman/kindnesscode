import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BennyComponent } from './components/benny/benny.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'benny', component: BennyComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'roadmap', component: RoadmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
