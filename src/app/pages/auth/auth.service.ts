import { User, Resultado, ResultadoDetalle } from './../../shared/models/user.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged():Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData:User):Observable<Resultado | void>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    return this.http
      .post<Resultado>(`${environment.API_URL}`, authData, options)
    .pipe(
      map( (res:Resultado) => { 
        this.saveRole(res.resultado.desc_rol);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }
  logout():void{
    localStorage.removeItem('desc_rol');
    this.loggedIn.next(false);
  }

  private readRole():void{}
  private saveRole(desc_rol:string ):void{
    localStorage.setItem('desc_rol', desc_rol);
  }
  private handlerError(err):Observable<never>{
    let errorMessage = 'An error ocurred retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;  
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }


}
