import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  login: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  studLoginClick() {
        const stud = {
          login: this.login,
          password: this.password
        };

        if(stud.password == undefined) {
          console.log("input password");
          return false;
        }

        this.authService.authStud(stud).subscribe(data => {
          if(!data.success) {
            console.log(data.msg);
          }else {
            console.log("Authorized");

            this.router.navigate(['perscab']);
            this.authService.storeStud(data.token, data.stud);
          }

        });
    }




    lectLoginClick() {
          const lect = {
            login: this.login,
            password: this.password
          };

          if(lect.password == undefined) {
            console.log("input password");
            return false;
          }

          this.authService.authLect(lect).subscribe(data => {
            if(!data.success) {
              console.log(data.msg);
            }else {
              console.log("Authorized");

              this.router.navigate(['perscab']);
              this.authService.storeLect(data.token, data.lect);
            }

          });
      }



}
