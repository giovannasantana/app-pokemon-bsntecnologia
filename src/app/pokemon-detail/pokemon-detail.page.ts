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
}
