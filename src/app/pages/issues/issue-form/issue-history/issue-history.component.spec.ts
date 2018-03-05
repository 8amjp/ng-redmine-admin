import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHistoryComponent } from './issue-history.component';

describe('IssueHistoryComponent', () => {
  let component: IssueHistoryComponent;
  let fixture: ComponentFixture<IssueHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
