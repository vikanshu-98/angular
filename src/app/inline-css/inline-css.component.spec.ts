import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCssComponent } from './inline-css.component';

describe('InlineCssComponent', () => {
  let component: InlineCssComponent;
  let fixture: ComponentFixture<InlineCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
