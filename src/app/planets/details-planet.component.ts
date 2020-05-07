import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Planet } from './planet';
import { PLANETS } from './mock-planets';

@Component({
  selector: 'app-details-planet',
  templateUrl: './details-planet.component.html'
})

export class DetailsPlanetComponent implements OnInit{

 planet: Planet = null;
 planets: Planet[] = null;

  constructor(private router: Router, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.planets = PLANETS;

    const id = +this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].id === id) {
        this.planet = this.planets[i];
      }
    }
  }
  goBack(): void {
    this.router.navigate(['/planets']);
  }
}


