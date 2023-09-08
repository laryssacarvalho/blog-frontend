import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService, public localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isAuthenticationRequest(req)) return next.handle(req);

    let token = this.localStorageService.getToken();
    
    const reqWithToken = this.addTokenToHeader(req, token!);

    return next.handle(reqWithToken);
    
  }

  private isAuthenticationRequest(req: HttpRequest<any>) {
    return req.url.includes('/auth/');
  }

  private addTokenToHeader(req: HttpRequest<any>, token: string) {
    return req.clone({
      headers: req.headers.set(`Authorization`, `Bearer ${token}`),
      url: req.url,
    });
  }
}
