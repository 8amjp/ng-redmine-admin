import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutFormComponent } from './default-layout-form.component';

describe('DefaultLayoutFormComponent', () => {
  let component: DefaultLayoutFormComponent;
  let fixture: ComponentFixture<DefaultLayoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
