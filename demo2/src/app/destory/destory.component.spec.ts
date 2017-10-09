import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestoryComponent } from './destory.component';

describe('DestoryComponent', () => {
  let component: DestoryComponent;
  let fixture: ComponentFixture<DestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
