import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole: string = '';

  constructor(private authService: AuthService, private localStorageService: LocalStorageService){}  

  ngOnInit(){   
    this.localStorageService.userRole.subscribe(result => this.userRole = result);
  }

  onLogout(){
    this.authService.logout();
  }
}
