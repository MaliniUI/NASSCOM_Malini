import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegisterPassComponent} from "./register-pass/register-pass.component";

// declare a constant variable with datatype of Routes.

const appRoutes:Routes=[
  {
    path: "",
    component: LandingPageComponent
  },
   {
    path: "register",
    component: RegisterPassComponent
  }
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}