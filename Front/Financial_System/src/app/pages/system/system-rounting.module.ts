import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: SystemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})

export class SystemRoutingModule { }
