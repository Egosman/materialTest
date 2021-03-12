import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription;
  loginForm = this.fb.group({
    usuario: [''],
    contrasena: [''],
  });

  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router, private notifyService: NotificationService) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Usuario valido","")
  }

  onLogin():void{
    const formValue = this.loginForm.value;
    this.subscriptions.add(
      this.authSvc.login(formValue).subscribe( (res) =>{
        if(res){
          this.router.navigate(['']);
          this.showToasterSuccess();
        }
      })
    );
  }

}
