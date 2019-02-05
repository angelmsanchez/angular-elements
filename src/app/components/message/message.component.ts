
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <h1 style='text-center'>{{title}}</h1>
    <h2>hey {{name}} loving Angular Elements {{answer}}</h2>
  `,
  styles: ['h2 {color:red;}']
})
export class MessageComponent {
  @Input() name: string;
  @Input() answer: string;
  title = 'Angular Elements';
}
