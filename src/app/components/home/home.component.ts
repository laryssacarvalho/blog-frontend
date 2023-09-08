import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // constructor(private router: Router, private localStorageService: LocalStorageService){}
  
  ngOnInit(): void {

    this.localStorageService.userRole.subscribe(result => {
      if(result)
        this.router.navigate(['posts']);
    });
  }

  form = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router){}

  onSubmit() {
    this.authService.login(this.form.value.email!, this.form.value.password!);
  }
}
