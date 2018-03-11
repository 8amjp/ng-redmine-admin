import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDatetimepickerComponent } from './bootstrap-datetimepicker.component';

describe('BootstrapDatetimepickerComponent', () => {
  let component: BootstrapDatetimepickerComponent;
  let fixture: ComponentFixture<BootstrapDatetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDatetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
