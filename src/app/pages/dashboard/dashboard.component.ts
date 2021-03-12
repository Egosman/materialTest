import { RootCountry, BF } from './../../shared/models/dashboard.interface';
import { DashboardService } from './dashboard.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rootCountry: RootCountry;
  countries: any[] = [];

  minDate = this.datePrev();
  maxDate = this.dateTomorrow();

  click: boolean = false;

  //dashboardForm;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  dateFormControl = new FormControl('',Validators.required);
  nameFormControl = new FormControl('', Validators.required);

  


  constructor(private dashSer: DashboardService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.showCountry();
  }

  dateTomorrow(){
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }

  datePrev(){
    let date = new Date();

    date.setMonth(date.getMonth() - 11);
    return date;    
  }

  showCountry() {
    this.dashSer.getData().subscribe((res) => {
      
      this.rootCountry = res;

      const c = Object.values(res.data);
      c.forEach(element => {
        this.countries.push(element.country);
      });
    
    });
  }


  
}

