import { AuthService } from './../../../pages/auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isLogged = false;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe( (res) => (this.isLogged = res));
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogout():void{
    this.authSvc.logout;
  }

}
