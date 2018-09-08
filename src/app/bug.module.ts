import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { bugReducer } from './bugs-machine/store/reducers/bug.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('bug', bugReducer)
  ],
  declarations: []
})
export class BugModule {}