import { Component } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customCounter } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  public error: boolean = false;
  constructor(
    private _store: Store<{counter: CounterState}>
  ){}

  addToCount(input: HTMLInputElement){
    let value = +input.value;
    if(typeof value === 'number' && !Number.isNaN(value)){
      this._store.dispatch(customCounter({count: value})) 
      input.value = ''
      this.error = false;
    }else{
      this.error = true;
    }

  }
}