import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
  //  HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule

   // Ng2GoogleChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
