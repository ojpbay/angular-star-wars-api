import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { PeopleResponse } from './star-wars.model';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private readonly httpClient: HttpClient) {}

  private BaseUrl: string = 'https://swapi.dev/api';

  public getPeople(): Observable<any[]> {
    return this.httpClient
      .get<PeopleResponse>(`${this.BaseUrl}/people`)
      .pipe(
        tap(x => console.log(x)),
        map(res => res.results)
      )      
  }
}
