import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Planet} from './planet';

@Injectable()
export class PlanetsService {

  public constructor(private httpClient: HttpClient) {
  }

  private planetsUrl = 'http://localhost:8080/planets';

  getPlanets(): Observable<Planet[]> {
    return this.httpClient.get<Planet[]>(this.planetsUrl).pipe(
      tap(_ => this.log(`fetched planets`)),
      catchError(this.handleError(`getPlanets`, [])));
  }

  getPlanet(id: number): Observable<Planet> {
    const url = `${(this.planetsUrl)}/?id=${id}`;
    return this.httpClient.get<Planet>(url).pipe(
      tap(_ => this.log(`fetched planets id = ${id} `)),
      catchError(this.handleError<Planet>(`getPlanets id = ${id}`))
    );
  }

  setPicture(planets: Planet[]) {
    const picturePathBase = 'src\\assets\\img\\planetspng\\';
    planets.forEach(planet => planet.picture = picturePathBase.concat(planet.name));
  }

  private log(log: string) {
    console.log(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`S{operation} failed: $message{error.message}`);
      return of(result as T);
    };
  }

}
