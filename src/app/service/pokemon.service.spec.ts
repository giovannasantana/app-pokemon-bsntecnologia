import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('AppService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
