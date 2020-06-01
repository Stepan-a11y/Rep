import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { HeaderComponent } from './header/header.component';

import {RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CheckFormService } from './check-form.service';
import { AuthComponent } from './auth/auth.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { PerscabComponent } from './perscab/perscab.component';

import { IsLoggedIn } from "./isLogged.guard";

const appRoute: Routes = [
   {path: '', component: HomeComponent },
    {path: 'auth', component: AuthComponent },
    {path: 'perscab', component: PerscabComponent, canActivate: [IsLoggedIn] },
   {path: 'reg', component: RegComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegComponent,
    HeaderComponent,
    AuthComponent,
    PerscabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule
  ],
  providers: [CheckFormService, AuthService, IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
