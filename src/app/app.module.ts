import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroForm} from "./hero-form-component/hero-form.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeroForm,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
