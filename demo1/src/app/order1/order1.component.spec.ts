import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Order1Component } from './order1.component';

describe('Order1Component', () => {
  let component: Order1Component;
  let fixture: ComponentFixture<Order1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Order1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
