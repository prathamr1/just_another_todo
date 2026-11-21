import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.scss',
  templateUrl: './counter.html',
})
export class Counter {
  counterval = signal(0);
  increment(){
    this.counterval.update(val => val + 1);

  }
  decrement(){
    this.counterval.update(val => val - 1);
  }
  reset(){
    this.counterval.set(0);
  }
}
