
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usuarioAutenticadoPortal: boolean = false;
  private token: any;
  private user: any;

  constructor(private httpClient: HttpClient) { }

  checkToken() {
    return Promise.resolve(true);
  }

  AuthenticatedUser(status: boolean) {
    localStorage.setItem('usuarioAutenticadoPortal', JSON.stringify(status));
    this.usuarioAutenticadoPortal = status;
  }

  UserIsAuthenticated(): Promise<boolean> {
    this.usuarioAutenticadoPortal = localStorage.getItem('usuarioAutenticadoPortal') == 'true';
    return Promise.resolve(this.usuarioAutenticadoPortal);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  get getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  ClearToken() {
    this.token = null;
    this.user = null;
  }

  ClearDataUser() {
    this.AuthenticatedUser(false);
    this.ClearToken();
    localStorage.clear();
    sessionStorage.clear();
  }

  setUserEmail(email: string) {
    localStorage.setItem('userEmail', email);
  }

  getUserEmail() {
    var userEmailLogado = localStorage.getItem('userEmail');
    if (userEmailLogado) {
      return userEmailLogado;
    }
    else {
      this.ClearDataUser();
      return "";
    }
  }
}
