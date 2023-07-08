import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroComponent } from './components/hero/hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { BennyComponent } from './components/benny/benny.component';
import { WhatComponent } from './components/what/what.component';
import { WhoComponent } from './components/who/who.component';
import { MissionComponent } from './components/mission/mission.component';
import { VisionComponent } from './components/vision/vision.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    HeroComponent,
    WelcomeComponent,
    FooterComponent,
    BennyComponent,
    WhatComponent,
    WhoComponent,
    MissionComponent,
    VisionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
