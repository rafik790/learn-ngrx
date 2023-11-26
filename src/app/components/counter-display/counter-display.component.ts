import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { getCounter } from 'src/app/shared/store/counter.selector';
import { StoreModel } from 'src/app/shared/store/global/store.model';



@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterDisplay: number = 0;
  counterSubscription: Subscription;
  constructor(private store: Store<StoreModel>) {

  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    /*this.counterSubscription = this.store.select('counter').subscribe({
      next: (data: CounterModel) => {
        console.log(data);
        this.counterDisplay = data.counter;
      }
    });*/

    this.counterSubscription = this.store.select(getCounter).subscribe({
      next: (data: number) => {
        this.counterDisplay = data;
        console.log("Counter Display");
      }
    });

  }
}
