import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement, reset } from 'src/app/shared/store/counter.actions';
import { getChannelname } from 'src/app/shared/store/counter.selector';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { StoreModel } from 'src/app/shared/store/global/store.model';



@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit, OnDestroy{
  constructor(private store: Store<StoreModel>) {
  }

  counterSubscription: Subscription;
  ngOnInit(): void {
    /*this.counterSubscription = this.store.select('counter').subscribe({
      next: (data: CounterModel) => {
        console.log(data);
        this.channelName = data.channelname;
      }
    });*/
    this.counterSubscription = this.store.select(getChannelname).subscribe({
      next: (data: string) => {
        this.channelName = data;
        console.log("Channel Display");
      }
    });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  channelName: string='';
  counterInput: number;
  actionType: string = "add";
  onAction() {
    this.store.dispatch(customIncrement({ value: +this.counterInput, actionType: this.actionType }));
  }

}
