import { NavController } from '@ionic/angular';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService, private navCtrl: NavController) {}

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemonList = response.results;
    });
  }

  openDetailsPokemon(pokemon: any) {
    this.navCtrl.navigateForward(`/pokemon-detail/${this.getPokemonId(pokemon.url)}`);
  }

  getPokemonId(url: string | undefined): string {
    if (!url) {
      return '';
    }
    const id = url.split('/').filter(segment => segment).pop();
    return id ? id : '';
  }

}
