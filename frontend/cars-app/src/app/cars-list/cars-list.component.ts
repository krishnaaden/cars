import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarCategory } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[];
  carCategories: CarCategory[] = [];
  quarters = [];
  selectedQuarter: string = '';

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit() {
    this.carsService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
      let uniqueQuarters = [];
      const availableQuarters = this.cars.map((car: Car) => car.quarter);
      availableQuarters.forEach((quarter) => {
        if(!uniqueQuarters.includes(quarter)) {
          uniqueQuarters.push(quarter);
        }
      });
      this.selectedQuarter = this.quarters[0];
      this.quarters = uniqueQuarters.map((quarter) => {
        return {
          value: quarter,
          expanded: false
        }
      });
      this.onQuarterChange(this.quarters[0]);
    }, (err) => {
      console.log(':: err', err);
    });
  }

  onQuarterChange(quarter) {
    console.log(':: Quarter', quarter);
    this.selectedQuarter = quarter;
    this.quarters = this.quarters.map((q) => {
      return {
        ...q,
        expanded: q.value == quarter
      }
    })
  }

  carClicked(id) {
    this.router.navigate(['cars/'+id]);
    console.log(':: car Clicked', id);
  }

  getCarsByQuarter(cars: Car, quarter: string) {
    return this.cars.filter((car: Car) => car.quarter === quarter);
  }

}
