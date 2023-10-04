import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.selectedMenu = 3;
  }
}
