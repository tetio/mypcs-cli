import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { 
  ButtonModule, PasswordModule, 
  PanelModule, } from 'primeng/primeng';


import { routing } from './app.routing';

import { AuthGuard } from './guards/auth.guard';
import { CompanyService } from './services/company.service';
import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ButtonModule, PasswordModule,
    PanelModule
  ],
  providers: [AuthGuard, AuthenticationService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
