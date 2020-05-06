import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {ListPlanetsComponent} from './list-planets.component';
import {DetailsPlanetComponent} from './details-planet.component';
import {Page404Component} from './page-404.component';

import {BoarderCardDirective} from './boarder-card.directive';
import {PlanetNameColorPipe} from './planet-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPlanetsComponent,
    DetailsPlanetComponent,
    Page404Component,
    BoarderCardDirective,
    PlanetNameColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
