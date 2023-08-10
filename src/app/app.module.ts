// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogModule } from './blog/blog.module';
import { EventsModule } from './events/events.module'
import { GraphQLModule } from './graphql.module';
import { SharedModule } from './shared/shared.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { BennyComponent } from './components/benny/benny.component';
import { WhatComponent } from './components/what/what.component';
import { WhoComponent } from './components/who/who.component';
import { MissionComponent } from './components/mission/mission.component';
import { VisionComponent } from './components/vision/vision.component';
import { AboutComponent } from './components/about/about.component';
import { ValuesComponent } from './components/values/values.component';
import { UniqueComponent } from './components/unique/unique.component';
import { BennyWallComponent } from './components/benny-wall/benny-wall.component';
import { ShareComponent } from './components/share/share.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { BenComponent } from './components/workshop/ben/ben.component';
import { BrainComponent } from './components/workshop/brain/brain.component';
import { VoicesComponent } from './components/workshop/voices/voices.component';

// SERVICES
import { SeoService } from './seo.service';
import { ActionComponent } from './components/workshop/action/action.component';
import { BooksComponent } from './components/workshop/books/books.component';
import { TeamComponent } from './components/team/team.component';
import { DigitalComponent } from './components/workshop/digital/digital.component';
import { CampComponent } from './components/workshop/camp/camp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    WelcomeComponent,
    FooterComponent,
    BennyComponent,
    WhatComponent,
    WhoComponent,
    MissionComponent,
    VisionComponent,
    AboutComponent,
    ValuesComponent,
    UniqueComponent,
    BennyWallComponent,
    ShareComponent,
    RoadmapComponent,
    WorkshopComponent,
    BenComponent,
    BrainComponent,
    VoicesComponent,
    ActionComponent,
    BooksComponent,
    TeamComponent,
    DigitalComponent,
    CampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    BlogModule,
    EventsModule,
    SharedModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
