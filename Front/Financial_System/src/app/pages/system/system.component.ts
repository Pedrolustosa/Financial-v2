import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  constructor(public menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.selectedMenu = 2;
  }
}
