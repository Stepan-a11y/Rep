import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
    stud: any;
    lect: any;

  constructor(private http: Http) { }

  registerStud(stud) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:7777/pc/regStud',
    stud, {headers: headers}).pipe(map((response: any) => response.json()));

 }

 registerLect(lect) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:7777/pc/regLect',
    lect, {headers: headers}).pipe(map((response: any) => response.json()));

 }

}
