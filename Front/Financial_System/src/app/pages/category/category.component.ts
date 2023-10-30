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
  typeScreen: number = 1;
  tableListCategory: Array<Category> | any;
  id: string | any;
  page: number = 1;
  config: any;
  pagination: boolean = true;
  itemsPerPage: number = 10;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public systemService: SystemService,
    public authService: AuthService,
    public categoryService: CategoryService
  ) { }

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
    this.categoryForm.reset();
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

  listCategoriesUser() {
    this.typeScreen = 1;
    this.categoryService.ListCategoriesUser(this.authService.getUserEmail())
      .subscribe((response: Array<Category> | any) => {
        this.tableListCategory = response;
      }, (error) => console.error(error),
        () => { })
  }

  ngOnInit() {
    this.menuService.selectedMenu = 3;
    this.configPag();
    this.listCategoriesUser();
    this.categoryForm = this.formBuilder.group({ name: ['', [Validators.required]], systemSelect: ['', [Validators.required]], })
    this.listSystemsUser();
  }

  dataForm() { return this.categoryForm.controls; }

  send() {
    var datas = this.dataForm();
    if (this.itemEdit) {
      this.itemEdit.Name = datas["name"].value;
      this.itemEdit.PropertyName = "";
      this.itemEdit.Message = "";
      this.itemEdit.Notification = [];
      this.categoryService.UpdateCategory(this.itemEdit)
        .subscribe((response: FinancialSystem | any) => {
          this.categoryForm.reset();
          this.listCategoriesUser();
        }, (error) => console.error(error),
          () => { })
    }
    else {
      let item = new Category();
      item.Name = datas["name"].value;
      item.Id = 0;
      item.SystemId = parseInt(this.systemSelect.id.toString())
      this.categoryService.AddCategory(item)
        .subscribe((response: Category) => {
          this.categoryForm.reset();
        }, (error) => console.error(error),
          () => { })
    }
  }

  itemEdit: Category | any;
  edit(id: number) {
    this.categoryService.GetCategoryById(id)
      .subscribe((reponse: Category | any) => {
        if (reponse) {
          this.itemEdit = reponse;
          this.typeScreen = 2;
          var system = reponse;
          var data = this.dataForm();
          data["name"].setValue(this.itemEdit.Name);
          this.listSystemsUser(reponse.SystemId)
        }
      },
        (error) => console.error(error),
        () => { })
  }

  listSystemsUser(id: string = "") {
    this.systemService.ListSystemsUser(this.authService.getUserEmail())
      .subscribe((response: Array<FinancialSystem> | any) => {
        var lisSistemaFinanceiro: SelectModel[] = [];
        response.forEach((x: { Id: string; name: string; }) => {
          var item = new SelectModel();
          item.id = x.Id;
          item.name = x.name;
          lisSistemaFinanceiro.push(item);
          if (id && id == x.Id) {
            this.systemSelect = item;
          }
        });
        this.systemList = lisSistemaFinanceiro;
      },
        (error) => {
          console.error("Error:", error);
        })
  }
}
