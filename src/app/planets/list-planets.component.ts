import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Planet} from './planet';
import {PLANETS} from './mock-planets';

@Component({
  selector: 'list-planet',
  templateUrl: './list-planets.component.html'
})

export class ListPlanetsComponent implements OnInit {
  title = 'Solar System Planets';
  public planets: Planet[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.planets = PLANETS;
  }

  selectPlanet(planet: any) {
    this.router.navigate(['/planet/', planet.id]);
  }
}
