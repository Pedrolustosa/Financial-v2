import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent {
  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.selectedMenu = 4;
  }
}
