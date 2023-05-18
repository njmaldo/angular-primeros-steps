

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'App-counter',
    template: `
    <h3>{{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent implements OnInit {

    public counter: number  = 10;

    increaseBy(value: number):void {
      this.counter += value;
    }
    reset():void {
      this.counter = 10;
    }
    
    constructor() { }

    ngOnInit() { }
}