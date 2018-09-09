import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllBugs } from '../store/reducers';

@Component({
  selector: 'app-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.css']
})
export class BugsListComponent implements OnInit {
  bugs$: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {

    this.bugs$ = this.store.select(selectAllBugs);

  }


  private itemEditEvent(e) {
    console.log("itemEditEvent", e);
  }
}
