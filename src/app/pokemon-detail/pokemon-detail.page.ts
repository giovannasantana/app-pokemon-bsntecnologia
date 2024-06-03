import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemonId: any;
  pokemonDetails: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    this.loadPokemonDetails();
  }

  loadPokemonDetails() {
    this.pokemonService.getPokemonDetails(this.pokemonId).subscribe((details: any) => {
      this.pokemonDetails = details;
      console.log(this.pokemonDetails);
    });
  }

  getIconForPokemonType(types: any[]): string[] {
     // Verifica se o tipo de Pokémon está definido e não é nulo
  if (types && types.length > 0) {
    const type = types[0].type.name;
    // Retorna o nome do arquivo SVG correspondente ao tipo de Pokémon
    return types.map(typeInfo => `assets/icons/${typeInfo.type.name.toLowerCase()}.svg`);
  } else {
    // Se o tipo de Pokémon não estiver definido ou for nulo, retorna um ícone padrão
    return ['assets/icons/default-icon.svg'];
  }
  }
}
