import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'planetNameColor'})
export class PlanetNameColorPipe implements PipeTransform {
  transform(name: string): string {

    let color: string;

    switch (name) {
      case 'Mercury':
        color = 'green lighten-1';
        break;
      case 'Venus':
        color = 'cobalt lighten-1';
        break;
      case 'Earth':
        color = 'blue lighten-1';
        break;
      case 'Mars':
        color = 'orange lighten-1';
        break;
      case 'Saturn':
        color = 'yellow lighten-1';
        break;
      case 'Jupiter':
        color = 'purple lighten-1';
        break;
      case 'Uranus':
        color = 'blue lighten-1';
        break;
      case 'Neptune':
        color = 'grey lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}
