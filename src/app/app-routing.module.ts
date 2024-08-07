import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { PageInConstructionComponent } from './page-in-construction/page-in-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SolarSystemComponent},
  { path: 'mercury', component: PageInConstructionComponent},
  { path: 'venus', component: PageInConstructionComponent},
  { path: 'earth', component: PageInConstructionComponent},
  { path: 'mars', component: PageInConstructionComponent},
  { path: 'jupiter', component: PageInConstructionComponent},
  { path: 'saturn', component: PageInConstructionComponent},
  { path: 'uranus', component: PageInConstructionComponent},
  { path: 'neptune', component: PageInConstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
