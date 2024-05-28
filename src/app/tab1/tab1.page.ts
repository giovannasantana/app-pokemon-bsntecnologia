import { PokemonService } from './../service/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemonList = response.results;
    });
  }
}
