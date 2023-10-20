import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { SystemService } from 'src/app/services/system.service';
import { CategoryService } from './../../services/category.service';
import { ExpenditureService } from './../../services/expenditure.service';
import { Category } from 'src/app/models/Category';
import { Expenditure } from 'src/app/models/Expenditure';

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
  color = 'accent';
  checked = false;
  disabled = false;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public systemService: SystemService, public authService: AuthService,
    public categoryService: CategoryService,
    public expenditureService: ExpenditureService) { }

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

  handleChangePago(item: any) {
    this.checked = item.checked as boolean;
  }

  ListarCategoriasUsuario() {
    this.categoryService.GetAllCategoriesUser(this.authService.getEmailUser())
      .subscribe((reponse: Array<Category> | any) => {
        var listCategories: SelectModel[] = [];
        reponse.forEach((x: { Id: { toString: () => string; }; Name: string; }) => {
          var item = new SelectModel();
          item.id = x.Id.toString();
          item.name = x.Name;
          listCategories.push(item);
        });
        this.categoryList = listCategories;
      })
  }

  send() {
    debugger
    var data = this.dataForm();
    let item = new Expenditure();
    item.Id = 0;
    item.Name = data["name"].value;
    item.Value = data["value"].value;
    item.Paid = this.checked;
    item.DueDate = data["dueDate"].value;
    item.CategoryId = parseInt(this.selectCategory.id);

    this.expenditureService.AddExpenditure(item)
      .subscribe((response: Expenditure) => {
        this.expenditureForm.reset();
      }, (error) => console.error(error),
        () => { })
  }
}
