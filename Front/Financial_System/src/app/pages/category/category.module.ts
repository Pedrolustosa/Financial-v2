import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-rounting.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  providers: [],
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NavbarModule,
    SidebarModule
  ]
})

export class CategoryModule { }
