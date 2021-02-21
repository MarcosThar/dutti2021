import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AUTH_API } from 'src/app/pages/constants/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private http: HttpClient ) {}

  login(userData): Observable<any>{
    return this.http.post(AUTH_API.LOGIN, userData)
  }
  register(userData): Observable<any>{
    return this.http.post(AUTH_API.REGISTER, userData)
  }
}
