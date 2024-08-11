import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeManagementFormComponent } from './income-management-form.component';

describe('IncomeManagementFormComponent', () => {
  let component: IncomeManagementFormComponent;
  let fixture: ComponentFixture<IncomeManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeManagementFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
