import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  systemForm: FormGroup | any;

  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.menuService.selectedMenu = 2;
    this.systemForm = this.formBuilder.group
      ({
        name: ['', [Validators.required]]
      })
  }

  dataForm() {
    return this.systemForm.controls;
  }

  send() {
    debugger
    var data = this.dataForm();
    alert(data["name"].value)
  }
}
