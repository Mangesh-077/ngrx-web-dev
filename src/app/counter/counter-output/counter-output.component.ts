import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {


  counter!: number;
  counterSubscription!: Subscription;
  counter$!: Observable< Number>;

  constructor(
    private _store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.counter$ =  this._store.select(getCounter);
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe()
    }
  }
}
