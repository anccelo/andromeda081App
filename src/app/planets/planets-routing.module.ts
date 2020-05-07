import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListPlanetsComponent} from './list-planets.component';
import {DetailsPlanetComponent} from './details-planet.component';

// routes
const planetsRoutes: Routes = [
  {path: 'planets', component: ListPlanetsComponent},
  {path: 'planet/:id', component: DetailsPlanetComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(planetsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class PlanetsRoutingModule {
}
