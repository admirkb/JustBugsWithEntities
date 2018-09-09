import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { Bug } from '../../../models/bug.model';

import * as bugActions from '../actions/bug.actions';

export interface State extends EntityState<Bug> { }

export const bugAdapter: EntityAdapter<Bug> = createEntityAdapter<Bug>();

export const initialState: State = bugAdapter.getInitialState();

export function bugReducer(
  state: State = initialState,
  action: bugActions.BugActions
) {
  switch (action.type) {

    case bugActions.ADD_BUG:
      return bugAdapter.addOne(action.payload.bug, state);

    case bugActions.UPDATE_BUG:
      return bugAdapter.updateOne(
        { id: action.payload.id, changes: { response: action.payload.response, dateResolved: action.payload.dateResolved } },
        state
      );

    case bugActions.DELETE_BUG:
      return bugAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}