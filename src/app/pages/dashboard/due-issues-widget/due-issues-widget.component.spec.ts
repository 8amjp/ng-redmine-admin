import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueIssuesWidgetComponent } from './due-issues-widget.component';

describe('DueIssuesWidgetComponent', () => {
  let component: DueIssuesWidgetComponent;
  let fixture: ComponentFixture<DueIssuesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueIssuesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueIssuesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
