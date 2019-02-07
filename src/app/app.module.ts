import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [BrowserModule],
  entryComponents: [CounterComponent]
})
export class AppModule implements DoBootstrap {

  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap(): void {
    const element = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('my-counter-custom-element', element);
  }
}
