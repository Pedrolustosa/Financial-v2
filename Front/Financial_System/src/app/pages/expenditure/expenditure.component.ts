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
  typeScreen: number = 1;
  tableListExpenditure: Array<Expenditure> | any;
  id: string | any;
  page: number = 1;
  config: any;
  pagination: boolean = true;
  itemsPerPage: number = 10;
  color = 'accent';
  checked = false;
  disabled = false;

  configPag() {
    this.id = this.generateIdForPagingConfig();
    this.config = {
      id: this.id,
      currentPage: this.page,
      itemsPerPage: this.itemsPerPage
    };
  }

  generateIdForPagingConfig() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  register() {
    this.typeScreen = 2;
    this.expenditureForm.reset();
  }

  changeItemsPerPage() {
    this.page = 1
    this.config.currentPage = this.page;
    this.config.itemsPerPage = this.itemsPerPage;
  }

  changePage(event: any) {
    this.page = event;
    this.config.currentPage = this.page;
  }

  listExpenditureUser() {
    this.typeScreen = 1;
    this.expenditureService.ListExpensesUser(this.authService.getUserEmail())
      .subscribe((response: Array<Category> | any) => {
        this.tableListExpenditure = response;
      }, (error) => console.error(error),
        () => { })
  }

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public categoryService: CategoryService,
    public expenditureService: ExpenditureService
  ) { }

  ngOnInit() {
    this.menuService.selectedMenu = 4;
    this.configPag();
    this.listExpenditureUser();
    this.expenditureForm = this.formBuilder.group
      ({
        name: ['', [Validators.required]],
        value: ['', [Validators.required]],
        date: ['', [Validators.required]],
        selectCategory: ['', [Validators.required]],
      });
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
    if (this.itemEdit) {
      this.itemEdit.Name = data["name"].value;
      this.itemEdit.Value = data["value"].value;
      this.itemEdit.Paid = this.checked;
      this.itemEdit.ExpiredDate = data["date"].value;
      this.itemEdit.IdCategoria = parseInt(this.selectCategory.id);
      this.itemEdit.PropertyName = "";
      this.itemEdit.Message = "";
      this.itemEdit.Notification = [];
      this.expenditureService.UpdateExpenditure(this.itemEdit)
        .subscribe((response: Expenditure) => {
          this.expenditureForm.reset();
          this.listExpenditureUser();
        }, (error) => console.error(error),
          () => { })
    }
    else {
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
        },
          (error) => console.error("Error:", error),
          () => { })
    }
  }

  itemEdit: Expenditure | any;
  edit(id: number) {
    this.expenditureService.GetExpenditureById(id)
      .subscribe((reponse: Expenditure | any) => {
        if (reponse) {
          this.itemEdit = reponse;
          this.typeScreen = 2;
          this.ListCategoriesUser(reponse.CategoryId);
          var data = this.dataForm();
          data["name"].setValue(this.itemEdit.Name);

          var dateToString = reponse.expiredDate.toString();
          var dateFull = dateToString.split('-');
          var dayFull = dateFull[2].split('T');
          var day = dayFull[0];
          var month = dateFull[1];
          var year = dateFull[0];
          var dateInput = year + '-' + month + '-' + day;

          data["date"].setValue(dateInput);
          data["value"].setValue(reponse.Valor);

          this.checked = reponse.Paid;
        }
      },
        (error) => console.error(error),
        () => { })
  }

  ListCategoriesUser(id: string = "") {
    this.categoryService.ListCategoriesUser(this.authService.getUserEmail())
      .subscribe((response: Array<Category> | any) => {
        var listaCatagorias: SelectModel[] = [];
        response.forEach((x: { Id: string; name: string; }) => {
          var item = new SelectModel();
          item.id = x.Id;
          item.name = x.name;
          listaCatagorias.push(item);
          if (id && id == x.Id) {
            this.selectCategory = item;
          }
        });
        this.categoryList = listaCatagorias;
      },
        (error) => {
          console.error("Error:", error);
        })
  }
}
