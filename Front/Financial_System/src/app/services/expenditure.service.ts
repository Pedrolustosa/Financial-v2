import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Expenditure } from '../models/Expenditure';

@Injectable({
  providedIn: 'root'
})

export class ExpenditureService {
  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient: HttpClient) { }

  AddExpenditure(expenditure: Expenditure) {
    return this.httpClient.post<Expenditure>(`${this.baseURL}/AddExpenditure`, expenditure)
  }
}
