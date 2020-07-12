import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoldRemovalComponent } from './components/mold-removal/mold-removal.component';
import { PowerWashingComponent } from './components/power-washing/power-washing.component';
import { FloorsComponent } from './components/floors/floors.component';
import { DeepCleaningComponent } from './components/deep-cleaning/deep-cleaning.component';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    Covid19Component,
    AboutComponent,
    ContactComponent,
    MoldRemovalComponent,
    PowerWashingComponent,
    FloorsComponent,
    DeepCleaningComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
