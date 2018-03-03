import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIssuesWidgetComponent } from './open-issues-widget.component';

describe('OpenIssuesWidgetComponent', () => {
  let component: OpenIssuesWidgetComponent;
  let fixture: ComponentFixture<OpenIssuesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenIssuesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIssuesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
