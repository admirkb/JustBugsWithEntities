import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { BugsItemComponent } from './bugs-item/bugs-item.component';
import { BugsFormComponent } from './bugs-form/bugs-form.component';
import { BugsViewComponent } from './bugs-view/bugs-view.component';
import { StoreModule } from '@ngrx/store';
import { bugReducer } from './store/reducers/bug.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bug', bugReducer)
  ],
  declarations: [BugsListComponent, BugsItemComponent, BugsFormComponent, BugsViewComponent],
  exports: [BugsListComponent, BugsItemComponent, BugsFormComponent, BugsViewComponent]
})
export class BugsModule { }
