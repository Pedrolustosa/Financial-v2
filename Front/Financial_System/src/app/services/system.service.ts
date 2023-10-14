import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { FinancialSystem } from '../models/FinancialSystem';

@Injectable({
  providedIn: 'root'
})

export class SistemaService {
  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient: HttpClient) { }

  AddFinancialSystem(financialSystem: FinancialSystem) {
    return this.httpClient.post<FinancialSystem>(`${this.baseURL}/AddFinancialSystem`, financialSystem)
  }

  GetAllUserFinancialSystemUser(emailUser: string) {
    return this.httpClient.get(`${this.baseURL}/GetAllUserFinancialSystemUser?emailUser=${emailUser}`);
  }

  AddUserFinancialSystem(systemId: number, emailUser: string) {
    return this.httpClient.post<any>(`${this.baseURL}/AddUserFinancialSystem?systemId=${systemId}&emailUser=${emailUser}`, null)
  }
}
