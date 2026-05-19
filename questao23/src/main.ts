import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  const debounce = <T extends unknown[]> (
      callback: (...args: T) => void,
      delay: number,
  ) => {
      let timer: ReturnType<typeof setTimeout>;

      return (...args: T) => {
          clearTimeout(timer);

          timer = setTimeout(() => {
              callback(...args)
          }, delay);
      };
  }

  @Component({
      selector: 'search-input',
      templateUrl: './index.html',
  })
  export class SearchInputComponent implements OnInit {

      ngOnInit(): void{

          const input = document.getElementsByName("search-input") as HTMLInputElement;

          input.addEventListener('keydown', debounce());
      }


  }
