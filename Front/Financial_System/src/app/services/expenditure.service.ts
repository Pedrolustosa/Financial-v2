import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Expenditure } from '../models/Expenditure';

@Injectable({
  providedIn: 'root'
})

export class ExpenditureService {
  private readonly baseURL = environment.endPoint;

  constructor(private httpClient: HttpClient) { }

  ListExpensesUser(userEmail: string) {
    return this.httpClient.get(`${this.baseURL}/ListExpensesUser?userEmail=${userEmail}`);
  }

  AddExpenditure(expenditure: Expenditure) {
    return this.httpClient.post<Expenditure>(`${this.baseURL}/AddExpenditure`, expenditure)
  }

  GetExpenditureById(id: number) {
    return this.httpClient.get(`${this.baseURL}/GetExpenditureById?id=${id}`);
  }

  UpdateExpenditure(expenditure: Expenditure) {
    return this.httpClient.put<Expenditure>(`${this.baseURL}/UpdateExpenditure`, expenditure)
  }
}
