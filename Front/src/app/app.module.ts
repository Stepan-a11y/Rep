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

const appRoute: Routes = [
   {path: '', component: HomeComponent },
   {path: 'reg', component: RegComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
