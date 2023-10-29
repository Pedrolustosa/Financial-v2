import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancialSystem } from 'src/app/models/FinancialSystem';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  systemForm: FormGroup | any;
  systemSelect = new SelectModel();
  typeScreen: number = 1;
  tableListSystem: Array<FinancialSystem> | any;
  id: string | any;

  page: number = 1;
  config: any;
  pagination: boolean = true;
  itemsPerPage: number = 10

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

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public systemService: SystemService, public authService: AuthService) { }

  ngOnInit() {
    this.menuService.selectedMenu = 2;
    this.configPag();
    this.ListSystemsUser();
    this.systemForm = this.formBuilder.group({ name: ['', [Validators.required]] });
  }

  dataForm() { return this.systemForm.controls; }

  send() {
    var datas = this.dataForm();
    if (this.itemEdit) {
      this.itemEdit.Name = datas["name"].value;
      this.itemEdit.PropertyName = "";
      this.itemEdit.Message = "";
      this.itemEdit.Notification = [];
      this.systemService.UpdateFinancialSystem(this.itemEdit)
        .subscribe((response: FinancialSystem | any) => {
          this.systemForm.reset();
          this.ListSystemsUser();
        }, (error) => console.error(error),
          () => { })
    }
    else {
      let item = new FinancialSystem();
      item.Name = datas["name"].value;
      item.Id = 0;
      item.Month = 0;
      item.Year = 0;
      item.ClosingDay = 0;
      item.GenerateCopyDispense = true;
      item.MonthCopy = 0;
      item.YearCopy = 0;
      this.systemService.AddFinancialSystem(item).subscribe((response: FinancialSystem | any) => {
        this.systemForm.reset();
        this.systemService.AddUserFinancialSystem(response.id, this.authService.getUserEmail()).subscribe((response: any) => { },
          (error) => console.error(error),
          () => { })
      },
        (error) => console.error(error),
        () => { })
    }
  }

  register() {
    this.typeScreen = 2;
    this.systemForm.reset();
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

  ListSystemsUser() {
    this.typeScreen = 1
    this.systemService.ListSystemsUser(this.authService.getUserEmail()).subscribe((response: Array<FinancialSystem> | any) => {
      this.tableListSystem = response;
    },
      (error) => console.error(error), () => { })
  }

  itemEdit: FinancialSystem | any;
  edit(id: number) {
    this.systemService.GetFinancialSystemById(id)
      .subscribe((reponse: FinancialSystem | any) => {
        if (reponse) {
          this.itemEdit = reponse;
          this.typeScreen = 2;
          var dados = this.dataForm();
          dados["name"].setValue(this.itemEdit.Nome)
        }
      },
        (error) => console.error(error),
        () => { })
  }
}
