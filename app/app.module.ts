import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterOrganisationPassComponent } from './register-organisation-pass/register-organisation-pass.component';
import { RegisterSkillLabourPassComponent } from './register-skill-labour-pass/register-skill-labour-pass.component';
import { RegisteredPassComponent } from './registered-pass/registered-pass.component';
import { ErrorHandlerPageComponent } from './error-handler-page/error-handler-page.component';
import { RegisterIndividualPassComponent } from './register-individual-pass/register-individual-pass.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule, AppRoutingModule ],
  declarations: [ AppComponent, LandingPageComponent,    RegisterOrganisationPassComponent, RegisterSkillLabourPassComponent, RegisteredPassComponent, ErrorHandlerPageComponent, RegisterIndividualPassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
