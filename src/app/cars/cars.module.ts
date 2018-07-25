import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from './../shared/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.service';


@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [CarsListComponent, TotalCostComponent, CarDetailsComponent],
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent],
  providers: [CarResolve]
})
export class CarsModule { }
