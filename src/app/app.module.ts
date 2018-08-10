import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewspeechComponent } from './viewspeech/viewspeech.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerConfig } from './datepicker/datepicker.component';
const appRoute: Routes = [
  {path:'',component:ViewspeechComponent},
  {path:'submit', component:SubmitFormComponent},
  {path:'search',component:SearchFormComponent}
]
//var app=angular.module('myApp', ['ngAudio']);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewspeechComponent,
    SubmitFormComponent,
    SearchFormComponent,
    NgbdDatepickerConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
