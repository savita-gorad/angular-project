import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineCountComponent } from './vaccine-count.component';

describe('VaccineCountComponent', () => {
  let component: VaccineCountComponent;
  let fixture: ComponentFixture<VaccineCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
