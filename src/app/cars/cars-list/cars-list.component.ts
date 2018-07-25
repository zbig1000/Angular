import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from './../cars.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;

  cars: Car[];

  constructor(private carsService: CarsService,
              private router: Router) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
  });
  this.totalCostRef.showGrossTotal();
  }

  showGross(): void {
    this.totalCostRef.showGrossTotal();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }
}
