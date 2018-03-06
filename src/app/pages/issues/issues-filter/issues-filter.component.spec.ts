import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesFilterComponent } from './issues-filter.component';

describe('IssuesFilterComponent', () => {
  let component: IssuesFilterComponent;
  let fixture: ComponentFixture<IssuesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
