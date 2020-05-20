import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorWorkComponent } from './prior-work.component';

describe('PriorWorkComponent', () => {
  let component: PriorWorkComponent;
  let fixture: ComponentFixture<PriorWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
