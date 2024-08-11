import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeManagementChartComponent } from './income-management-chart.component';

describe('IncomeManagementChartComponent', () => {
  let component: IncomeManagementChartComponent;
  let fixture: ComponentFixture<IncomeManagementChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeManagementChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeManagementChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
