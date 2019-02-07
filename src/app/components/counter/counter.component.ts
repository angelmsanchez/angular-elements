
import {
  Component, Input, ViewEncapsulation,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter Custom Element</h1>
    <button (click)="increment()">+</button>
    <span> {{ value }} </span>
    <button (click)="decrement()">-</button>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent {
  @Input() value: string;

  constructor(
    private elementRef: ElementRef,
  ) { }

  increment(): void {
    this.value = (parseInt(this.value, 0) + 1).toString();
    this.changeValue();
  }

  decrement(): void {
    this.value = (parseInt(this.value, 0) - 1).toString();
    this.changeValue();
  }

  private changeValue() {
    this.elementRef.nativeElement
      .dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
  }
}
