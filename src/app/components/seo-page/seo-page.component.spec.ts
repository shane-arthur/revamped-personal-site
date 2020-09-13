import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPageComponent } from './seo-page.component';

describe('SeoPageComponent', () => {
  let component: SeoPageComponent;
  let fixture: ComponentFixture<SeoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
