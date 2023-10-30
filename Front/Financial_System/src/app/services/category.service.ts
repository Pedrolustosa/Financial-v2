import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private readonly baseURL = environment.endPoint;

  constructor(private httpClient: HttpClient) { }

  ListCategoriesUser(emailUser: string) {
    return this.httpClient.get(`${this.baseURL}/ListCategoriesUser?userEmail=${emailUser}`);
  }

  AddCategory(category: Category) {
    return this.httpClient.post<Category>(`${this.baseURL}/AddCategory`, category)
  }

  GetCategoryById(id: number) {
    return this.httpClient.get(`${this.baseURL}/GetCategoryById?id=${id}`);
  }

  UpdateCategory(category: Category) {
    return this.httpClient.put<Category>(`${this.baseURL}/UpdateCategory`, category)
  }
}
