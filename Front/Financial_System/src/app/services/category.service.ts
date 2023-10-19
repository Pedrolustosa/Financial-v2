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

  GetAllCategoriesUser(emailUser: string) {
    return this.httpClient.get(`${this.baseURL}/GetAllCategoriesUser?emailUser=${emailUser}`);
  }

  AddCategory(category: Category) {
    return this.httpClient.post<Category>(`${this.baseURL}/AddCategory`, category)
  }
}
