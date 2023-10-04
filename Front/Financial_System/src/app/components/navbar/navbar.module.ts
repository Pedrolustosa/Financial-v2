import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule(
    {
        declarations: [NavbarComponent],
        imports: [CommonModule, FormsModule],
        exports: [NavbarComponent]
    }
)

export class NavbarModule { }
