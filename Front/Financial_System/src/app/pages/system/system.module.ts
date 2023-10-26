import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-rounting.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [],
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    NavbarModule,
    SidebarModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
  ]
})

export class SystemModule { }
