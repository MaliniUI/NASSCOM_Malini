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
import { RegisterPassComponent } from './register-pass/register-pass.component';
import { RegisterIndividualPassComponent } from './landing-page/register-individual-pass/register-individual-pass.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule, AppRoutingModule ],
  declarations: [ AppComponent, LandingPageComponent,  RegisterPassComponent, RegisterIndividualPassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
