import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  AdicionarCategoria(category: Category) {
    return this.httpClient.post<Category>(`${this.baseURL}/AdicionarCategoria`,
      category)
  }

  ListarCategoriasUsuario(emailUsuario: string) {
    return this.httpClient.get(`${this.baseURL}/ListarCategoriasUsuario?emailUsuario=${emailUsuario}`);
  }
}
