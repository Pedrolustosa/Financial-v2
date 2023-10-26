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

  listSystemsUser() {
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
