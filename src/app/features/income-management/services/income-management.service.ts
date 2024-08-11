import { Injectable } from '@angular/core';

import { IIncome } from '../interfaces/income-management.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IncomeManagementService {

  private incomes: IIncome[] = [
    {
      source: 'Work',
      amount: 3000
    },
    {
      source: 'Freelancer',
      amount: 1400
    },
  ]

  getIncomes(): IIncome[] {
    return this.incomes;
  }

  addIncome(income: IIncome): void {
    this.incomes.push(income);
  }
}
