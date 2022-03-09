import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import{MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PayslipComponent } from './payslip/payslip.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'angular-crumbs';
import {NgDynamicBreadcrumbModule} from 'ng-dynamic-breadcrumb';
import {MatListModule} from '@angular/material/list';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,PayslipComponent, EmployeeComponent, LoginComponent, LeaveComponent, AttendanceComponent, SignupComponent, 

  ],
  imports: [
    BrowserModule,MatInputModule,MatSidenavModule,
    AppRoutingModule,MatIconModule,
    BrowserAnimationsModule,NgDynamicBreadcrumbModule,
    MatToolbarModule,BreadcrumbModule,
    MatCardModule,FormsModule,
    FlexLayoutModule,MatButtonModule,
    MatFormFieldModule,MatDividerModule,ReactiveFormsModule,
    NgbModule,MatListModule
    
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
