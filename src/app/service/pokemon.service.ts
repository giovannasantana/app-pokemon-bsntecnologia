import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=50`);
  }

  getPokemonDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`);
  }
}
