import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { UniversComponent } from './univers/univers.component';
import { PageInConstructionComponent } from './page-in-construction/page-in-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SolarSystemComponent,
    UniversComponent,
    PageInConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }