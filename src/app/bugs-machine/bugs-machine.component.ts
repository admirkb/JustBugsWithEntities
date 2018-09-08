import { Component, OnInit } from '@angular/core';
import * as BugActions from '../bugs-machine/store/actions/bug.actions';
import { Bug } from '../models/bug.model';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { selectAllBugs } from './store/reducers';

@Component({
  selector: 'app-bugs-machine',
  templateUrl: './bugs-machine.component.html',
  styleUrls: ['./bugs-machine.component.css']
})
export class BugsMachineComponent implements OnInit {
  bugs$: any;
  bug: string;
  editing = false;
  idToEdit: string | null;

  constructor(private store: Store<any>) {}

  ngOnInit() {

    this.bugs$ = this.store.select(selectAllBugs);
  }


  addBug(value) {
    const bug: Bug = {
      problem: value,
      response:null,
      dateCreated: null,
      dateResolved: null,
      id: this.generateUUID()
    };
    this.store.dispatch(new BugActions.AddBug({ bug }));

    this.bug = '';
  }

  deleteBug(id) {
    this.store.dispatch(new BugActions.DeleteBug({ id }));
  }

  editBug(bug) {
    this.editing = true;
    this.bug = bug.value;
    this.idToEdit = bug.id;
  }

  cancelEdit() {
    this.editing = false;
    this.bug = '';
    this.idToEdit = null;
  }

  updateBug(updatedBug) {
    this.store.dispatch(
      new BugActions.UpdateBug({
        id: this.idToEdit,
        newValue: updatedBug
      })
    );
    this.bug = '';
    this.idToEdit = null;
    this.editing = false;
  }

  toggleDone(bug) {
    this.store.dispatch(
      new BugActions.ToggleDone({ id: bug.id, done: !bug.done })
    );
  }

  generateUUID() {
    return UUID.UUID();
  }
}
