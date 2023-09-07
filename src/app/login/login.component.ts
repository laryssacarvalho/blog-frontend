import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor(private authService: AuthService, 
    private localStorageService: LocalStorageService, 
    private jwtService: JwtService, 
    private readonly router: Router){}

  onSubmit() {
    this.authService.login(this.form.value.email!, this.form.value.password!)
      .subscribe(result => {        
        this.localStorageService.setToken(result.data.token);
        let role = this.jwtService.getClaim(result.data.token, 'role');
        this.localStorageService.setRole(role);
        this.router.navigate(["posts"]);
      });
  }
}
