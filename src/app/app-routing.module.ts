import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { PowerWashingComponent } from './components/power-washing/power-washing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FloorsComponent } from './components/floors/floors.component';
import { MoldRemovalComponent } from './components/mold-removal/mold-removal.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { DeepCleaningComponent } from './components/deep-cleaning/deep-cleaning.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'power-washing', component: PowerWashingComponent},
  { path: 'floors', component: FloorsComponent},
  { path: 'mold-removal', component: MoldRemovalComponent},
  { path: 'covid-19', component: Covid19Component},
  { path: 'deep-cleaning', component: DeepCleaningComponent},
  { path: 'gallery', component: GalleryComponent},


  // if no route, redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
