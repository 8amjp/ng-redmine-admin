import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLayoutFormComponent } from './custom-layout-form.component';

describe('CustomLayoutFormComponent', () => {
  let component: CustomLayoutFormComponent;
  let fixture: ComponentFixture<CustomLayoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLayoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
