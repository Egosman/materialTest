import { Data, RootCountry } from './../../shared/models/dashboard.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlData = "https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true";

  constructor(private http: HttpClient) { }

  getData(): Observable<RootCountry>{
    return this.http.get<RootCountry>(this.urlData)
    .pipe(
      catchError((err) => this.handlerError(err))
    );
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An error ocurred retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }
 
}
