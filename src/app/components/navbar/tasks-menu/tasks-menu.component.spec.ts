import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMenuComponent } from './tasks-menu.component';

describe('TasksMenuComponent', () => {
  let component: TasksMenuComponent;
  let fixture: ComponentFixture<TasksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
