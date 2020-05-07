import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsRoutingModule} from './planets-routing.module';

import {ListPlanetsComponent} from './list-planets.component';
import {DetailsPlanetComponent} from './details-planet.component';

import {BoarderCardDirective} from './boarder-card.directive';
import {PlanetNameColorPipe} from './planet-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  declarations: [
    ListPlanetsComponent,
    DetailsPlanetComponent,
    BoarderCardDirective,
    PlanetNameColorPipe
  ],
  exports: [
  ]
})
export class PlanetsModule {
}
