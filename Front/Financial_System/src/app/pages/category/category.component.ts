import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancialSystem } from 'src/app/models/FinancialSystem';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  systemList = new Array<SelectModel>();
  systemSelect = new SelectModel();
  categoryForm: FormGroup | any;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public systemService: SystemService) { }

  ngOnInit() {
    this.menuService.selectedMenu = 3;
    this.categoryForm = this.formBuilder.group({ name: ['', [Validators.required]] })
    this.GetAllCategoriesUser();
  }

  dataForm() {
    return this.categoryForm.controls;
  }

  send() {
    debugger
    var data = this.dataForm();
    alert(data["name"].value)
  }

  GetAllCategoriesUser() {
    this.systemService.GetAllUserFinancialSystemUser("")
      .subscribe((response: Array<FinancialSystem> | any) => {
        var listFinancialSystem: SelectModel[] = []
        response.forEach((x: { Id: { toString: () => string; }; Name: string; }) => {
          var item = new SelectModel();
          item.id = x.Id.toString();
          item.name = x.Name;
          listFinancialSystem.push(item);
        })
        this.systemList = listFinancialSystem;
      });
  }
}
