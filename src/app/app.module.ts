import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap(): void {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-angular-microapp', element);
  }
}
