import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsMachineComponent } from './bugs-machine.component';

describe('BugsMachineComponent', () => {
  let component: BugsMachineComponent;
  let fixture: ComponentFixture<BugsMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
