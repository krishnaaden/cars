import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {}

  /**
   * this fxn return the list of cars
   */
  getCars() {
    return this.http.get(`${environment.apiUrl}cars`).pipe(
      catchError(()=> throwError(new Error('Error getting data from service')))
    );
  }

  /**
   * this fxn return the data of single car
   * @param id id of the car
   */
  getCar(id: string) {
    return this.http.get(`${environment.apiUrl}cars/${id}`).pipe(
      catchError(()=> throwError(new Error('Error getting car from server')))
    );
  }
}
