import { NavController } from '@ionic/angular';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService, private navCtrl: NavController, private router: Router) {}

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemonList = response.results;
    });
  }

  openDetailsPokemon(pokemon: any) {
    const pokemonId = this.getPokemonId(pokemon.url);
    this.router.navigate([`/pokemon-detail/${pokemonId}`]);
  }

  getPokemonId(url: string): string {
    return url.split('/').filter(segment => segment).pop() || '';
  }
}
