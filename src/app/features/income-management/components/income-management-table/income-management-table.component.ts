import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IIncome } from '../../interfaces/income-management.interfaces';
import { IncomeManagementService } from '../../services/income-management.service';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-income-management-table',
  standalone: true,
  imports: [CommonModule, PanelModule, TableModule],
  templateUrl: './income-management-table.component.html',
})
export class IncomeManagementTableComponent {
  @Input() incomes!: IIncome[];
}
