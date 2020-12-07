import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'cars',
    component: CarsListComponent
  },{
    path: 'cars/:id',
    component: CarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
