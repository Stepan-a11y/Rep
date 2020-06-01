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

  getStud() {
    return this.http.post('http://localhost:7777/main/getStud',{})
  }



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


 authStud(stud) {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('http://localhost:7777/pc/authStud',
   stud, {headers: headers}).pipe(map((response: any) => response.json()));
 }


 authLect(lect) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:7777/pc/authLect',
    lect, {headers: headers}).pipe(map((response: any) => response.json()));
  }



  storeStud(token, stud){
     localStorage.setItem('token', token);
     localStorage.setItem('stud', JSON.stringify(stud));
     this.token = token;
     this.stud = stud;
   }


   storeLect(token, lect){
   localStorage.setItem('token', token);
   localStorage.setItem('lect', JSON.stringify(lect));
   this.token = token;
   this.lect = lect;
 }

 logoutStud(){
      this.token = null;
      this.stud = null;
      localStorage.clear();
    }



    logoutLect(){
     this.token = null;
     this.lect = null;
     localStorage.clear();
   }

   isLoggedIn() {
        return tokenNotExpired();
      }


}
