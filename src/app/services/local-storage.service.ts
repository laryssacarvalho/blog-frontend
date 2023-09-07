import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly tokenKey = 'token';
  private readonly roleKey = 'role';

  setToken(value: string){
    localStorage.setItem(this.tokenKey, value);
  }

  setRole(value: string){
    localStorage.setItem(this.roleKey, value);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  getRole(){
    return localStorage.getItem(this.roleKey);
  }

  clearStorage(){
    localStorage.clear();
  }
}
