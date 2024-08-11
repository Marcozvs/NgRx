import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { IncomeManagementService } from '../../services/income-management.service';

import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-income-management-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    OverlayPanelModule,
    InputTextModule,
    InputNumberModule,
  ],
  templateUrl: './income-management-form.component.html',
})
export class IncomeManagementFormComponent implements OnInit {
  @Output() addIncomeEvent: EventEmitter<void> = new EventEmitter<void>();

  formGroup!: FormGroup;

  private incomeService: IncomeManagementService = inject(
    IncomeManagementService
  );

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      source: new FormControl<string | undefined>(
        undefined,
        Validators.required
      ),
      amount: new FormControl<number | undefined>(
        undefined,
        Validators.required
      ),
    });
  }

  addIncome(): void {
    this.incomeService.addIncome(this.formGroup.getRawValue());
    this.formGroup.reset();
    this.addIncomeEvent.emit();
  }
}
