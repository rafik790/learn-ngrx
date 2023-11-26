import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProgessLoader } from 'src/app/shared/store/global/gloab.selectors';
import { StoreModel } from 'src/app/shared/store/global/store.model';

@Component({
  selector: 'app-loader-spin',
  templateUrl: './loader-spin.component.html',
  styleUrls: ['./loader-spin.component.css']
})
export class LoaderSpinComponent implements OnInit {

  isloaded: boolean = false;
  constructor(private store: Store<StoreModel>) {

  }
  ngOnInit(): void {
    this.store.select(getProgessLoader).subscribe({
      next: (resp: boolean)=>{
        console.log("resp::",resp);
        this.isloaded = resp;
      }
    })
  }

}
