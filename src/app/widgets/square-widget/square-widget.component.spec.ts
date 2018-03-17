import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareWidgetComponent } from './square-widget.component';

describe('SquareWidgetComponent', () => {
  let component: SquareWidgetComponent;
  let fixture: ComponentFixture<SquareWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
