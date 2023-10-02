import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-rounting.module';

@NgModule({
  providers: [],
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: []
})

export class DashboardModule { }
