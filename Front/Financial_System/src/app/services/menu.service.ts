
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  menuSelecionado: any;

  constructor() {
  this.menuSelecionado;
  }
}
