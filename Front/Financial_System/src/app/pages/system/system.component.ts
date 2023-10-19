import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancialSystem } from 'src/app/models/FinancialSystem';
import { MenuService } from 'src/app/services/menu.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  systemForm: FormGroup | any;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public systemService: SystemService) { }

  ngOnInit() {
    this.menuService.selectedMenu = 2;
    this.systemForm = this.formBuilder.group({ name: ['', [Validators.required]] })
  }

  dataForm() { return this.systemForm.controls; }

  send() {
    var dados = this.dataForm();
    let item = new FinancialSystem();
    item.Name = dados["name"].value;
    item.Id = 0;
    item.Month = 0;
    item.Year = 0;
    item.ClosingDay = 0;
    item.GenerateCopyDispense = true;
    item.MonthCopy = 0;
    item.YearCopy = 0;

    this.systemService.AddFinancialSystem(item).subscribe((response: FinancialSystem) => {
      console.log("response:", response.Id);
      this.systemForm.reset();
      this.systemService.AddUserFinancialSystem(response.Id, "test@test.com", response).subscribe(
        (response: any) => {
          debugger;
        },
        (error) => console.error(error)
      );
    },
      (error) => console.error(error));
  }
}
