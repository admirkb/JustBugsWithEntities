import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap
  } from '@ngrx/store';
  import * as fromBug from './bug.reducer';
  
  export const reducers: ActionReducerMap<any> = {
    bug: fromBug.bugReducer
  };
  
  export const selectBugState = createFeatureSelector<fromBug.State>('bug');
  
  export const { selectAll: selectAllBugs } = fromBug.bugAdapter.getSelectors(
    selectBugState
  );