import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
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
  categoryList = new Array<SelectModel>();
  selectCategory = new SelectModel();
  expenditureForm: FormGroup | any;
  color = 'accent';
  checked = false;
  disabled = false;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public authService: AuthService,
    public categoryService: CategoryService,
    public expenditureService: ExpenditureService) { }

  ngOnInit() {
    this.menuService.selectedMenu = 4;
    this.expenditureForm = this.formBuilder.group
      ({
        name: ['', [Validators.required]],
        value: ['', [Validators.required]],
        date: ['', [Validators.required]],
        selectCategory: ['', [Validators.required]],
      })
    this.ListCategoriesUser();
  }

  dataForm() {
    return this.expenditureForm.controls;
  }

  handleChangePago(item: any) {
    this.checked = item.checked as boolean;
  }

  send() {
    var data = this.dataForm();
    let item = new Expenditure();
    item.Id = 0;
    item.Name = data["name"].value;
    item.Value = data["value"].value;
    item.Paid = this.checked;
    item.ExpiredDate = data["date"].value;
    item.CategoryId = parseInt(this.selectCategory.id.toString());
    this.expenditureService.AddExpenditure(item)
      .subscribe((response: Expenditure) => {
        this.expenditureForm.reset();
      }, (error) => console.error(error),
        () => { })
  }

  ListCategoriesUser() {
    this.categoryService.ListCategoriesUser(this.authService.getEmailUser())
      .subscribe((response: Array<Category> | any) => {
        var listaCatagorias: SelectModel[] = [];
        response.forEach(function (x: { id: string; name: string; }) {
          var item = new SelectModel();
          item.id = x.id;
          item.name = x.name;
          listaCatagorias.push(item);
        });
        this.categoryList = listaCatagorias;
        console.log("response: ", response);
      })
  }
}
