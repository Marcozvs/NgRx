import { Component, inject, OnInit, ViewChild } from '@angular/core';

import { IncomeManagementFormComponent } from './components/income-management-form/income-management-form.component';
import { IncomeManagementTableComponent } from './components/income-management-table/income-management-table.component';
import { IncomeManagementChartComponent } from './components/income-management-chart/income-management-chart.component';

import { IIncome } from './interfaces/income-management.interfaces';

import { IncomeManagementService } from './services/income-management.service';

@Component({
  selector: 'app-income-management',
  standalone: true,
  imports: [
    IncomeManagementFormComponent,
    IncomeManagementTableComponent,
    IncomeManagementChartComponent,
  ],
  templateUrl: './income-management.component.html',
})
export class IncomeManagementComponent implements OnInit {
  @ViewChild(IncomeManagementChartComponent) incomeManagementChartComponent!: IncomeManagementChartComponent;

  incomes: IIncome[] = [];

  private incomeManagementService: IncomeManagementService = inject(IncomeManagementService);

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes(): void {
    this.incomes = this.incomeManagementService.getIncomes();
    this.incomeManagementChartComponent.defineChart(this.incomes);
  }
}
