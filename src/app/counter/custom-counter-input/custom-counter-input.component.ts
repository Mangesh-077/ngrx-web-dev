import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeName, customCounter } from '../state/counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  public fullName$!: Observable<CounterState>;
  public error: boolean = false;

  constructor(
    private _store: Store<{counter: CounterState}>
  ){}
  
  ngOnInit(): void {
   this.fullName$ = this._store.select('counter')
     
  }

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

  changename(input: HTMLInputElement){
    this._store.dispatch(changeName({skills: input.value}))
    input.value = '';
  }
}