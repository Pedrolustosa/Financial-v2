import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { FinancialSystem } from '../models/FinancialSystem';

@Injectable({
  providedIn: 'root'
})

export class SistemaService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  AdicionarSistemaFinanceiro(financialSystem: FinancialSystem) {
    return this.httpClient.post<FinancialSystem>(`${this.baseURL}/AdicionarSistemaFinanceiro`,
      financialSystem)
  }

  ListaSistemasUsuario(emailUsuario: string) {
    return this.httpClient.get(`${this.baseURL}/ListaSistemasUsuario?emailUsuario=${emailUsuario}`);
  }

  CadastrarUsuarioNoSistema(idSistema: number, emailUsuario: string) {
    return this.httpClient.post<any>(`${this.baseURL}/CadastrarUsuarioNoSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`, null)
  }
}
