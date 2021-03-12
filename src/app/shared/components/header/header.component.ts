import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../pages/auth/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = false;
  isLogged = false;

  private subscription = new Subscription();

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc: AuthService, private toastr: NotificationService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  showToasterSuccess() {
    this.toastr.showSuccess("Contraseña correcta !!", "Loggenado");
  }

  onLogout():void{
    this.showToasterSuccess();
    //this.authSvc.logout;
  }

}
