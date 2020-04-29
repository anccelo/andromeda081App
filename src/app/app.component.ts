import {Component, OnInit} from '@angular/core';

import {Planet} from './planet';
import {PLANETS} from './mock-planets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Solar system planets';
  private planets: Planet[];

  ngOnInit() {
    this.planets = PLANETS;
  }

  selectPlanet(planet: any) {
    alert('You have chosen ' + planet.name);
  }
}
