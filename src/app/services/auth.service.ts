import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseModel } from '../models/api-response.model';
import { LoginModel } from '../models/login.model';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = '';
  
  constructor(private readonly http: HttpClient, 
    private localStorageService: LocalStorageService, 
    private router: Router,
    private jwtService: JwtService) { 
    this.apiBaseUrl = 'https://laryssablog.azurewebsites.net/auth';
  }

  login(email: string, password: string) {
    this.http.post<ApiResponseModel<LoginModel>>(`${ this.apiBaseUrl }/login`, { email, password })
      .subscribe(result => {
        this.localStorageService.setToken(result.data.token);
        let role = this.jwtService.getClaim(result.data.token, 'role');        
        let userId = this.jwtService.getClaim(result.data.token, 'nameid');
        this.localStorageService.setRole(role);
        this.localStorageService.setUserId(userId);
        this.router.navigate(["posts"]);
      });
  }

  logout() {
    this.localStorageService.clearStorage();
    this.router.navigate(['home']);
  }
}
