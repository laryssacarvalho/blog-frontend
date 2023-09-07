import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { JwtService } from "../services/jwt.service";
import { LocalStorageService } from "../services/local-storage.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        // private loginService: LoginService,
                private router: Router,
                private localStorageService: LocalStorageService,
                private jwtService: JwtService) {
    }
    canActivate() {
        if(!this.localStorageService.getToken()){
            this.router.navigate(['login']);
        }
        return true;
        // if (this.jwtService.getUser()) {
        //     if (this.jwtService.isTokenExpired()) {
        //       // Should Redirect Sig-In Page
        //     } else {
        //       return true;
        //     }
        // } else {
        //   return new Promise((resolve) => {
        //     this.loginService.signIncallBack().then((e) => {
        //        resolve(true);
        //     }).catch((e) => {
        //       // Should Redirect Sign-In Page
        //     });
        //   });
        // }
    }
  }