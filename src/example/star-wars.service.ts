import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private readonly httpClient: HttpClient) {}

  private BaseUrl: string = 'https://swapi.dev/api';

  public getPeople(): Observable<any[]> {
    return this.httpClient
      .get(`${this.BaseUrl}/people`)
      .pipe(map((res) => [res]));
  }
}
