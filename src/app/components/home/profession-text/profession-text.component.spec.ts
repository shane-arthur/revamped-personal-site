import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionTextComponent } from './profession-text.component';

describe('ProfessionTextComponent', () => {
  let component: ProfessionTextComponent;
  let fixture: ComponentFixture<ProfessionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
