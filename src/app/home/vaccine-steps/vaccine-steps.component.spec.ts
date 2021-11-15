import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineStepsComponent } from './vaccine-steps.component';

describe('VaccineStepsComponent', () => {
  let component: VaccineStepsComponent;
  let fixture: ComponentFixture<VaccineStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
