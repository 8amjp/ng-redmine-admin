import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesMenuComponent } from './messages-menu.component';

describe('MessagesMenuComponent', () => {
  let component: MessagesMenuComponent;
  let fixture: ComponentFixture<MessagesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
