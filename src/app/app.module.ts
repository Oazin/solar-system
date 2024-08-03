import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { UniversComponent } from './univers/univers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SolarSystemComponent,
    UniversComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
