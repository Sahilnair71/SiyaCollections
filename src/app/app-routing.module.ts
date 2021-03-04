import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { BedsheetsComponent } from '.././app/card_components/bedsheets/bedsheets.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NavbarComponent },
  { path: 'bedsheets', component: BedsheetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
