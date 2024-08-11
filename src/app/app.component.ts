import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './layout';
import { IncomeManagementComponent } from './features/income-management/income-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    IncomeManagementComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
