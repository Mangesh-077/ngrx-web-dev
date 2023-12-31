import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {


  @Output() increment :EventEmitter<void> = new EventEmitter<void>()
  @Output() decrement :EventEmitter<void> = new EventEmitter<void>()
  @Output() reset :EventEmitter<void> = new EventEmitter<void>()

  onIncrement(){
    this.increment.emit()
  }

  onDecrement(){
    this.decrement.emit()
  }

  onReset(){
    this.reset.emit()
  }
}
