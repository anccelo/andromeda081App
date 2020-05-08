import {Injectable} from '@angular/core';

import {Planet} from './planet';
import {PLANETS} from './mock-planets';

@Injectable()
export class PlanetsService {

  getPlanets(): Planet[] {
    return PLANETS;
  }

  getPlanet(id: number): Planet{
    const planets: Planet[] = this.getPlanets();
    for (const planet of planets){
      if (planet.id === id) {
        return planet;
      }
    }
  }
}
