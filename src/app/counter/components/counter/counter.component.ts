import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template: `
  <h1>Hola COUNTER</h1><h3>Counter: {{ counter }}</h3>
  <button (click)="increseBy(7)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="decreseBy(5)">-1</button>
`
})

export class counterComponent {

  public counter: number = 10;

  increseBy (value: number):void {
    this.counter +=value;
  }

  decreseBy (value: number):void {
    this.counter -=value;
  }

  resetCounter ():void {
    this.counter =10;
  }
}

