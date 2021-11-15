import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationTrendComponent } from './vaccination-trend.component';

describe('VaccinationTrendComponent', () => {
  let component: VaccinationTrendComponent;
  let fixture: ComponentFixture<VaccinationTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
