import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BugActions from '../store/actions/bug.actions';
import { Bug } from '../../models/bug.model';

@Component({
  selector: 'app-bugs-item',
  templateUrl: './bugs-item.component.html',
  styleUrls: ['./bugs-item.component.css']
})
export class BugsItemComponent implements OnInit {
  @Input() bug;
  @Input() index;
  isEditable: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  deleteBug(id) {
    this.store.dispatch(new BugActions.DeleteBug({ id }));
  }

  editBug(bug) {

    this.isEditable = true;
    let b = { bug: bug };
    console.log("editBug", bug)

  }

  cancelBug(bug) {

    this.isEditable = false;

  }

  updateBug(bug) {

    this.store.dispatch(
      new BugActions.UpdateBug({
        id: bug.id,
        response: bug.response,
        dateResolved: new Date()
      })
    );

    this.isEditable = false;
  }

}

