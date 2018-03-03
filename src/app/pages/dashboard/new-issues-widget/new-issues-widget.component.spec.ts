import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIssuesWidgetComponent } from './new-issues-widget.component';

describe('NewIssuesWidgetComponent', () => {
  let component: NewIssuesWidgetComponent;
  let fixture: ComponentFixture<NewIssuesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIssuesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIssuesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
