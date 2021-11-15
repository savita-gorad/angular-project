import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCompComponent } from './summary-comp.component';

describe('SummaryCompComponent', () => {
  let component: SummaryCompComponent;
  let fixture: ComponentFixture<SummaryCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
