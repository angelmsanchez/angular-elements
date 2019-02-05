import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [BrowserModule],
  entryComponents: [MessageComponent]
})
export class AppModule implements DoBootstrap {

  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap(): void {
    const element = createCustomElement(MessageComponent, { injector: this.injector });
    customElements.define('my-custom-element', element);
  }
}
