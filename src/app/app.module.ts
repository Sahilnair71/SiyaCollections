import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { CircularCardsComponent } from './circular-cards/circular-cards.component';
import { BedsheetsComponent } from './card_components/bedsheets/bedsheets.component';
import { ColsetEssentialsComponent } from './colset-essentials/colset-essentials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ImagesliderComponent,
    CircularCardsComponent,
    BedsheetsComponent,
    ColsetEssentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
