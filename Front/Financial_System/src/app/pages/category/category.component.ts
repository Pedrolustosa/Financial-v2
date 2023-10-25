import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { FinancialSystem } from 'src/app/models/FinancialSystem';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { SystemService } from 'src/app/services/system.service';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  systemList = new Array<SelectModel>();
  systemSelect = new SelectModel();
  categoryForm: FormGroup | any;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public systemService: SystemService, public authService: AuthService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.menuService.selectedMenu = 3;
    this.categoryForm = this.formBuilder.group({ name: ['', [Validators.required]], systemSelect: ['', [Validators.required]], })
    this.ListSystemsUser();
  }

  dataForm() { return this.categoryForm.controls; }

  send() {
    var data = this.dataForm();
    let item = new Category();
    item.Name = data["name"].value;
    item.Id = 0;
    item.SystemId = parseInt(this.systemSelect.id.toString())
    this.categoryService.AddCategory(item)
      .subscribe((response: Category) => {
        this.categoryForm.reset();
      }, (error) => console.error(error),
        () => { })
  }

  ListSystemsUser() {
    this.systemService.ListSystemsUser(this.authService.getUserEmail())
      .subscribe((response: Array<FinancialSystem> | any) => {
        var lisSistemaFinanceiro: SelectModel[] = [];
        response.forEach(function (x: { id: string; name: string; }) {
          var item = new SelectModel();
          item.id = x.id;
          item.name = x.name;
          lisSistemaFinanceiro.push(item);
        });
        this.systemList = lisSistemaFinanceiro;
      })
  }
}
