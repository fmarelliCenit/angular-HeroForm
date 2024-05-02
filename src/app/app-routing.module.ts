import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroForm} from "./hero-form-component/hero-form.component";



const routes: Routes = [
  { path: 'heroForm', component: HeroForm },
  { path: '', redirectTo: '/heroForm', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
