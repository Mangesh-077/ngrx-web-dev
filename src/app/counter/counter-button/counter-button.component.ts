import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {

  constructor(
    private _store: Store<{counter: CounterState}>
  ){}

  onIncrement(){
    this._store.dispatch(increment())
  }

  onDecrement(){
    this._store.dispatch(decrement())
  }

  onReset(){
    this._store.dispatch(reset())
  }
}
