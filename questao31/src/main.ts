import { Component, signal, output, computed, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  @Component({
    selector: 'app-root',
    template: `<h1>{{items()}}</h1>
              <button type="button" id="item">"Add item"</button>`

  })

  export class AppComponent implements OnInit{
    items = signal(0);

    price = 5;

    totalPrice = computed(() => this.items() * this.price);

    ngOnInit(): void {
      this.output();
    }

    output() {
      document.addEventListener("click", () => this.items.set(this.items() + 1));
    }
  }
