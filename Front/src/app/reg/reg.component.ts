import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  firstName: String;
     lastName: String;
     email: String;
     login: String;
     password: String;
     subject: String;
     stage: String;

  constructor(
    private checkForm: CheckFormService,
    private authService: AuthService,
     private router: Router
  ) { }

  ngOnInit(): void {
  }

  studRegisterClick() {
          const stud = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            login: this.login,
            password: this.password
          };

          if(!this.checkForm.checkFirstName(stud.firstName)) {
            console.log("first name not input");
            return false;
          } else if(!this.checkForm.checkLastName(stud.lastName)) {
            console.log("last name not input");
            return false;
          }  else if(!this.checkForm.checkEmail(stud.email)) {
            console.log("email not input");
            return false;
          }  else if(!this.checkForm.checkLogin(stud.login)) {
              console.log("login not input");
              return false;
          }  else if(!this.checkForm.checkPassword(stud.password)) {
            console.log("password not input");
            return false;
          }

          this.authService.registerStud(stud).subscribe(data => {
                  if(!data.success) {
                    console.log(data.msg);
                      this.router.navigate(['/reg']);
                  } else {
                    console.log(data.msg);
                    this.router.navigate(['']);
                  }
                });

  }


  lectRegisterClick() {
      const lect = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        login: this.login,
        password: this.password,
        subject: this.subject,
        stage: this.stage
      };

      if(!this.checkForm.checkFirstName(lect.firstName)) {
        console.log("first name not input");
        return false;
      } else if(!this.checkForm.checkLastName(lect.lastName)) {
        console.log("last name not input");
        return false;
      }  else if(!this.checkForm.checkEmail(lect.email)) {
        console.log("email not input");
        return false;
      }  else if(!this.checkForm.checkLogin(lect.login)) {
          console.log("login not input");
          return false;
      }  else if(!this.checkForm.checkPassword(lect.password)) {
        console.log("password not input");
        return false;
      } else if(!this.checkForm.checkSubject(lect.subject)) {
        console.log("password not input");
        return false;
      } else if(!this.checkForm.checkStage(lect.stage)) {
        console.log("password not input");
        return false;
      }

      this.authService.registerLect(lect).subscribe(data => {
              if(!data.success) {
                console.log(data.msg);
                  this.router.navigate(['/reg']);
              } else {
                console.log(data.msg);
                this.router.navigate(['']);
              }
            });
    }


}
