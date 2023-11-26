import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeChannelName, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { StoreModel } from 'src/app/shared/store/global/store.model';




@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  changeNameClick: number = 0;
  constructor(private store: Store<StoreModel>) {

  }
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onChangeChannel() {
    this.changeNameClick++;
    let newChannelName = `Libanto Software - ${this.changeNameClick}`;
    this.store.dispatch(changeChannelName({ channelname: newChannelName }));
  }
}
