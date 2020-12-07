import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { Car } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  loading: boolean = true;

  constructor(private route: ActivatedRoute, private carsService: CarsService) {}

  car: Car;

  ngOnInit() {
    this.route.params.subscribe((route: ActivatedRoute) => {
      const id = route['id'];
      this.carsService.getCar(id).subscribe((car: Car) => {
        this.car = car;
        this.loading = false;
      }, (err) => {
        console.log(':: err', err);
        this.loading = false;
      });
    });
  }



}
