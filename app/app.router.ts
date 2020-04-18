import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegisterPassComponent} from "./register-pass/register-pass.component";
import { RegisterIndividualPassComponent } from './landing-page/register-individual-pass/register-individual-pass.component';
import { RegisterOrganisationPassComponent } from './register-organisation-pass/register-organisation-pass.component';
import { RegisterSkillLabourPassComponent } from './register-skill-labour-pass/register-skill-labour-pass.component';
// declare a constant variable with datatype of Routes.

const appRoutes:Routes=[
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "individual",
    component: RegisterIndividualPassComponent
  },
  {
    path: "organisation",
    component: RegisterOrganisationPassComponent
  },
  {
    path: "skill-labour",
    component: RegisterSkillLabourPassComponent
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