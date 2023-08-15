import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BennyComponent } from './components/benny/benny.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { TeamComponent } from './components/team/team.component';
import { OrganComponent } from './components/research/organ/organ.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'about/welcome', component: WelcomeComponent },
  { path: 'about/benny', component: BennyComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'about/team', component: TeamComponent },
  { path: 'organ', component: OrganComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
