import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {


  // @Input()counter !: number
  counter!: number;
  counterSubscription!: Subscription;
  counter$!: Observable<{counter: Number}>;

  constructor(
    private _store: Store<{counter: CounterState}>
  ){}

  ngOnInit(): void {
    this.counterSubscription =  this._store.select('counter')
      .subscribe(data => {
        this.counter =  data.counter
      })

      this.counter$ =  this._store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe()
    }
  }
}
