import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoMachineComponent } from './todo-machine/todo-machine.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FormsModule } from '@angular/forms';

import { reducers } from './store/reducers';
import { TodoModule } from './todo.module';
import { todoReducer } from './store/reducers/todo.reducer';
import { BugsMachineComponent } from './bugs-machine/bugs-machine.component';

import { BugModule } from './bug.module';
// const reducersObj = {
//   todoReducer: todoReducer,
// };

import { BugsModule } from './bugs/bugs.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoMachineComponent,
    BugsMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    // StoreModule.forFeature(circlesReducer),
    // StoreDevtoolsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 80 //  Retains last 80 states
    }),
    // StoreModule.forFeature('todo', todoReducer),
    EffectsModule.forRoot([]),
    TodoModule,
    // BugModule,
    BugsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
