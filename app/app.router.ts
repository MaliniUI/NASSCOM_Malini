import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegisterPassComponent} from "./register-pass/register-pass.component";
import { RegisterOrganisationPassComponent } from './register-organisation-pass/register-organisation-pass.component';
import { RegisterSkillLabourPassComponent } from './register-skill-labour-pass/register-skill-labour-pass.component';
import { RegisteredPassComponent } from './registered-pass/registered-pass.component';
import { ErrorHandlerPageComponent } from './error-handler-page/error-handler-page.component';
// declare a constant variable with datatype of Routes.

const appRoutes:Routes=[
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "organisation",
    component: RegisterOrganisationPassComponent
  },
  {
    path: "skill-labour",
    component: RegisterSkillLabourPassComponent
  },
  {
    path: "success",
    component: RegisteredPassComponent
  },
  {
    path: "error",
    component: ErrorHandlerPageComponent
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