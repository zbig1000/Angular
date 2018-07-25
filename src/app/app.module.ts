import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsModule } from './cars/cars.module';
import { AppComponent } from './app.component';
import { CarsService } from './cars/cars.service';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { CarsRoutingModule } from './cars/cars-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
  HttpModule,
  CoreModule,
  CarsModule,
  AppRoutingModule,
  CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
