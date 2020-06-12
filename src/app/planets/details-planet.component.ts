import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Planet} from './planet';
import {PlanetsService} from './planets.service';

@Component({
  selector: 'app-details-planet',
  templateUrl: './details-planet.component.html'
})

export class DetailsPlanetComponent implements OnInit {

  planet: Planet = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetsService.getPlanet(id).subscribe(planet => this.planet = planet);
  }

  goBack(): void {
    this.router.navigate(['/planets']);
  }

}


