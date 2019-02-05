import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    // AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    MessageComponent
  ]
})
export class AppModule {

  constructor(
    private injector: Injector,
  ) {
    const customElement = createCustomElement(MessageComponent, { injector });
    customElements.define('app-message', customElement);
  }

  ngDoBootstrap(): void {
    // const element = createCustomElement(AppComponent, { injector: this.injector });
    // customElements.define('my-angular-microapp', element);
  }
}
