import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {


  // @Output() increment :EventEmitter<void> = new EventEmitter<void>()
  // @Output() decrement :EventEmitter<void> = new EventEmitter<void>()
  // @Output() reset :EventEmitter<void> = new EventEmitter<void>()
  constructor(
    private _store: Store<{counter: {counter: number}}>
  ){}
  onIncrement(){
    // this.increment.emit()
    this._store.dispatch(increment())
  }

  onDecrement(){
    // this.decrement.emit()
    this._store.dispatch(decrement())
  }

  onReset(){
    // this.reset.emit()
    this._store.dispatch(reset())
  }
}
