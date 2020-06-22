import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Planet} from './planet';
import {PlanetsService} from './planets.service';

@Component({
  selector: 'list-planet',
  templateUrl: './list-planets.component.html'
})

export class ListPlanetsComponent implements OnInit {
  title = 'Solar System Planets';
  public planets: Planet[];
  order = 'orderToSun';

  constructor(
    private router: Router,
    private planetsService: PlanetsService) {
  }

  ngOnInit() {
    this.planetsService.getPlanets().subscribe(planets => this.planets = planets);
    this.planetsService.setPicture(this.planets);
  }

  selectPlanet(planet: any) {
    this.router.navigate(['/planet/', planet.id]);
  }
}
