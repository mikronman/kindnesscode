import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
