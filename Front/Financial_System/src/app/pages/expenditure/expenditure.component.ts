import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent {
  systemList = new Array<SelectModel>();
  selectSystem = new SelectModel();
  categoryList = new Array<SelectModel>();
  selectCategory = new SelectModel();
  expenditureForm: FormGroup | any;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.menuService.selectedMenu = 4;
    this.expenditureForm = this.formBuilder.group
      ({
        name: ['', [Validators.required]],
        value: ['', [Validators.required]],
        date: ['', [Validators.required]],
        selectSystem: ['', [Validators.required]],
        selectCategory: ['', [Validators.required]],
      })
  }

  dataForm() {
    return this.expenditureForm.controls;
  }

  send() {
    debugger
    var data = this.dataForm();
    alert(data["name"].value)
  }
}
