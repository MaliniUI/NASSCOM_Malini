import {Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

// declare a constant variable with datatype of Routes.

export const AppRoute:Routes = [
  {
    path: "",
    component: DashboardComponent
  },
   {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "careers",
    component: CareersComponent
  },
  {
    path: "technology",
    component: TechnologyComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];