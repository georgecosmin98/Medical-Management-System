import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../app/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private roles: string[];
  isLoggedIn = false;

  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  isAdmin = false;
  isDoctor = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    console.log(this.tokenStorageService.getUser().role);

    if (this.tokenStorageService.getUser().role == 'administrator') {
      this.isAdmin = true;
      this.isDoctor = false;
    }
    else if (this.tokenStorageService.getUser().role == 'doctor') {
      this.isAdmin = false;
      this.isDoctor = true;
    }
  
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}