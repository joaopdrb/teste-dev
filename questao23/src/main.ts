import { Component, Injectable, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { response } from 'express';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  @Injectable()
  class PokemonService {
    searchTerm: string = '';;
    url = `https://pokeapi.co/api/v2/pokemon/${this.searchTerm}`;

    getPokemon(): Observable<string> (subscriber =>{
      return fetch(this.url)
        .then(response => response.json());
    })
  }

  @Component({
      selector: 'search-input',
      templateUrl: './index.html',
      providers: [PokemonService]
  })
  export class SearchInputComponent implements OnInit {
    searchTerm: string = '';
    constructor(private pokemonService: PokemonService) {}

    ngOnInit(): void{
      this.pokemonService.getPokemon().subscribe(
        search => console.log(search)
      );
    }



  }

/* Verificar exemplo abaixo:

  import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const searchInput = document.getElementById('search') as HTMLInputElement;

// Create an observable from the input's 'keyup' event
fromEvent(searchInput, 'keyup').pipe(
  map((event: any) => event.target.value),
  debounceTime(300) // Wait for 300ms of silence
).subscribe(searchTerm => {
  console.log('Search for:', searchTerm);
  // Perform API call here
}); */
