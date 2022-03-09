import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent } from './home/home.component';
import{ LoginComponent} from './login/login.component';
import {EmployeeComponent} from './employee/employee.component';
import{ PayslipComponent} from './payslip/payslip.component';
import{ LeaveComponent} from './leave/leave.component';
import{ AttendanceComponent} from './attendance/attendance.component';
const routes: Routes = [
  {path:'' , redirectTo:'login',pathMatch: 'full' },
 
  {path:'login',component:LoginComponent},
  
// // login/home

// {path: 'home',
// component:HomeComponent,
// data: {
//   title: 'home',
//   breadcrumb: [{
//     label:'',
//     url: ''
//   },
// {
//   label:'home',
//   url:''
// },]
// },
// },

// // LOGIN/HOME/ATTENDANCE

// {path: 'home/attendance',
// component:AttendanceComponent,
// data: {
//   title: 'attendance',
//   breadcrumb: [{
//     label:'',
//     url: ''
//   },
// {
//   label:'home',
//   url:'login/home/'
// },
// {
//   label:'attendance',
//   url:''
// }]
// },
// },
// // login/home/employee

// {path: 'login/home/employee',
// component:EmployeeComponent,
// data: {
//   title: 'employee',
//   breadcrumb: [{
//     label:'login',
//     url: '/login/'
//   },
// {
//   label:'home',
//   url:'login/home/'
// },
// {
//   label:'employee',
//   url:''
// }]
// },
// },

// // login/home/payslip

// {path: '/home/payslip',
// component:PayslipComponent,
// data: {
//   title: 'payslip',
//   breadcrumb: [{
//     label:'login',
//     url: '/login/'
//   },
// {
//   label:'home',
//   url:'login/home/'
// },
// {
//   label:'payslip',
//   url:''
// }]
// },
// },

// // login/home/leave

// {path: 'login/home/leave',
// component:LeaveComponent,
// data: {
//   title: 'leave',
//   breadcrumb: [{
//     label:'login',
//     url: '/login/'
//   },
// {
//   label:'home',
//   url:'login/home/'
// },
// {
//   label:'leave',
//   url:''
// }]
// },
// },


  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'payslip',component:PayslipComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'leave',component:LeaveComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
