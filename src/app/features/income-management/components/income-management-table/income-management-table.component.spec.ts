import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeManagementTableComponent } from './income-management-table.component';

describe('IncomeManagementTableComponent', () => {
  let component: IncomeManagementTableComponent;
  let fixture: ComponentFixture<IncomeManagementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeManagementTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
