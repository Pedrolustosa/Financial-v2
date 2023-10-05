import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-rounting.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [],
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    NavbarModule,
    SidebarModule,
    ReactiveFormsModule
  ]
})

export class SystemModule { }
