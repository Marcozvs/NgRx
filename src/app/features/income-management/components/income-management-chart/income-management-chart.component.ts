import { Component, Input, OnInit } from '@angular/core';

import { IIncome } from '../../interfaces/income-management.interfaces';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-income-management-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './income-management-chart.component.html',
})
export class IncomeManagementChartComponent implements OnInit {
  @Input() incomes: IIncome[] = [];

  basicData: any;

  basicOptions: any;

  ngOnInit(): void {
    this.defineChart(this.incomes);
  }

  defineChart(incomes: IIncome[]): void {
    const documentStyle = getComputedStyle(document.documentElement);

    this.basicData = {
      labels: incomes.map((income) => income.source),
      datasets: [
        {
          label: 'Amount',
          data: incomes.map((income) => income.amount),
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: documentStyle.getPropertyValue('--text-color'),
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: documentStyle.getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: documentStyle.getPropertyValue('--surface-border'),
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: documentStyle.getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: documentStyle.getPropertyValue('--surface-border'),
            drawBorder: false,
          },
        },
      },
    };
  }
}
