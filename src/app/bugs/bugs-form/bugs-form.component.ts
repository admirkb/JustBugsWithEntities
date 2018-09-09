import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bug } from '../../models/bug.model';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import * as BugActions from '../store/actions/bug.actions';

@Component({
  selector: 'app-bugs-form',
  templateUrl: './bugs-form.component.html',
  styleUrls: ['./bugs-form.component.css']
})
export class BugsFormComponent implements OnInit {
  public formBug = this.fb.group({
    problem: ["", Validators.required],
    editColor: "transparent",
  });
  bug: Bug;

  constructor(public fb: FormBuilder,
    private store: Store<any>) { }

  ngOnInit() {
  }

  addBug(value) {
    const bug: Bug = {
      problem: value.problem,
      response: null,
      dateCreated: new Date(),
      dateResolved: null,
      id: this.generateUUID()
    };
    this.store.dispatch(new BugActions.AddBug({ bug }));

  }

  private onSubmit(e) {
    var value = this.formBug.value;
    this.addBug(value);
    this.formBug.reset();
  }

  generateUUID() {
    return UUID.UUID();
  }

}
