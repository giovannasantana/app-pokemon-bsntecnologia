import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(page: number, pageSize: number): Observable<any> {
    const limit = (page - 1) * pageSize;
    return this.http.get(`${this.apiUrl}/pokemon?limit=${pageSize}&offset=${limit}`);
  }

  getPokemonDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`);
  }

  addFavorite(pokemon: any): void {
    let favorites = this.getFavorites();
    favorites.push(pokemon);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFavorite(pokemon: any): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.name !== pokemon.name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): any[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  isFavorite(pokemon: any) {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.name === pokemon.name);
  }
}
