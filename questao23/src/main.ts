import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  class PesquisaPessoa {
    pessoas: string[];

    constructor(nomes: string[]) {
        for (let i = 0; i < nomes.length; i++) {
            this.pessoas[i] = nomes[i];
            
        }
    }

    const buscarPessoa: new observable(nome: string): string{
        for (let i = 0; i < this.pessoas.length; i++) {
            if (pessoas[i].includes(nome)) {
                return pessoas[i];
            };
            
        }
    }
  }
  
  @Component({
      selector: 'search-input',
      templateUrl: './index.html',
      providers: [buscarPessoa]
  })
  export class SearchInputComponent implements OnInit {
    busca: string,
    pessoas: string[] = ['Maria', 'Joao', 'Bruno', 'Giselle', 'Ana', 'Pedro'],
    constructor(pesquisaPessoa: PesquisaPessoa)
      
    ngOnInit(): void{
          const input = document.getElementsByName("search-input") as HTMLInputElement;

          input.addEventListener('keydown', debounceTime(this.pesquisaPessoa.buscaPessoa, 500));
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
