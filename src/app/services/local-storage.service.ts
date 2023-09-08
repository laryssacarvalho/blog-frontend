import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly tokenKey = 'token';
  private readonly roleKey = 'role';
  private readonly idKey = 'userId';
  private role = new BehaviorSubject<string>('');
  
  constructor(){
    if(this.getRole())
      this.role.next(this.getRole()!);
  }
  
  get userRole() {
    return this.role.asObservable();
  }

  setToken(value: string){
    localStorage.setItem(this.tokenKey, value);
  }

  setRole(value: string){
    localStorage.setItem(this.roleKey, value);
    this.role.next(value);
  }

  setUserId(value: string){
    localStorage.setItem(this.idKey, value);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  getUserId(){
    return localStorage.getItem(this.idKey);
  }

  getRole(){
    return localStorage.getItem(this.roleKey);
  }

  clearStorage(){
    localStorage.clear();
    this.role.next('');
  }
}
