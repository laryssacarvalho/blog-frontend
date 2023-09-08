import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private localStorageService: LocalStorageService){}
  
  ngOnInit(): void {

    this.localStorageService.userRole.subscribe(result => {
      if(result)
        this.router.navigate(['posts']);
    });
  }
}
