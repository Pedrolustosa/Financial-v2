import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Expenditure } from '../models/Expenditure';

@Injectable({
  providedIn: 'root'
})

export class ExpenditureService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  AdicionarDespesa(expenditure: Expenditure) {
    return this.httpClient.post<Expenditure>(`${this.baseURL}/AdicionarDespesa`,
      expenditure)
  }
}
