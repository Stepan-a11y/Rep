import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perscab',
  templateUrl: './perscab.component.html',
  styleUrls: ['./perscab.component.css']
})
export class PerscabComponent implements OnInit {

  constructor(
    private authService: AuthService,
  private router: Router
  ) { }

  ngOnInit(): void {
  }

  logoutStud() {
    this.authService.logoutStud();
    console.log("выход");
    this.router.navigate(['auth']);
    return false;
  }

  logoutLect() {
    this.authService.logoutLect();
    console.log("выход");
    this.router.navigate(['auth']);
    return false;
  }

}
