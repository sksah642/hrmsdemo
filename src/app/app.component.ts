import { Component,OnInit,ViewEncapsulation} from '@angular/core';
import { Title } from '@angular/platform-browser';

import{RouterOutlet} from '@angular/router';
//import { VERSION } from '@angular/material';
// import { Title } from '@angular/platform-browser';
// import { BreadcrumbService,Breadcrumb } from 'angular-crumbs';
 @Component({
selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
  //  encapsulation:ViewEncapsulation.None,
 })
// export class AppComponent implements OnInit {
  export class AppComponent {
    public constructor(private titleService:Title) {}
    public setTitle(newTitle: string) {
      this.titleService.setTitle(newTitle)
    }
//   //version = VERSION;

//   public onCardClick(evt:MouseEvent){
//     console.log(evt);

//   }
  title = 'task';
//   constructor(private titleService: Title,private breadcrumbService: BreadcrumbService ){}
//    ngOnInit(): void {
//      this.breadcrumbService.breadcrumbChanged.subscribe(crumbs=>{
//        this.titleService.setTitle(this.createTitle(crumbs));
//      })
//    }
//    private createTitle(routesCollection: Breadcrumb[]) {
//      const title ='Angular Demo';
//      const titles= routesCollection.filter((route)=> route.displayName);
//      if (!titles.length) {return title;}
//      const routeTitle = this.titleToString(titles);
//    }
//    private titlesToString(titles) {
//      return titles.reudce((prev, curr)=>{
//        return`${curr.displayName}-${prev}`;

//      }, '');
//    }
// // getanimationData(outlet: RouterOutlet) {
// //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

// }
 
  }
