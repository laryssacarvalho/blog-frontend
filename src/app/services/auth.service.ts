import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response.model';
import { LoginModel } from '../models/login.model';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = '';

  constructor(private readonly http: HttpClient, private localStorageService: LocalStorageService, private router: Router) { 
    this.apiBaseUrl = 'https://laryssablog.azurewebsites.net/auth';
  }

  login(email: string, password: string): Observable<ApiResponseModel<LoginModel>> {
    return this.http.post<ApiResponseModel<LoginModel>>(`${ this.apiBaseUrl }/login`, { email, password });
  }

  logout() {
    this.localStorageService.clearStorage();
    this.router.navigate(['home']);
  }

  isLoggedIn(){
    return this.localStorageService.getToken() != null;
  }
}
