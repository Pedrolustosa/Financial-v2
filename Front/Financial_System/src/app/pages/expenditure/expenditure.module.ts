import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenditureComponent } from './expenditure.component';
import { ExpenditureRoutingModule } from './expenditure-rounting.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  providers: [],
  declarations: [ExpenditureComponent],
  imports: [
    CommonModule,
    ExpenditureRoutingModule,
    NavbarModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})

export class ExpenditureModule { }
