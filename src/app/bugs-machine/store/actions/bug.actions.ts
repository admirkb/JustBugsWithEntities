import { Action } from '@ngrx/store';
import { Bug } from '../../../models/bug.model';

export const ADD_BUG = 'ADD_BUG';
export const DELETE_BUG = 'DELETE_BUG';
export const UPDATE_BUG = 'UPDATE_BUG';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export class AddBug implements Action {
  readonly type = ADD_BUG;

  constructor(public payload: { bug: Bug }) {}
}

export class DeleteBug implements Action {
  readonly type = DELETE_BUG;

  constructor(public payload: { id: string }) {}
}

export class UpdateBug implements Action {
  readonly type = UPDATE_BUG;

  constructor(public payload: { id: string; newValue: string }) {}
}

export class ToggleDone implements Action {
  readonly type = TOGGLE_DONE;

  constructor(public payload: { id: string; done: boolean }) {}
}

export type BugActions = AddBug | DeleteBug | UpdateBug | ToggleDone;
