import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/carDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl="https://localhost:44375/api/cars/getcardetails";

  constructor(private httpClient:HttpClient) { }

  getCarDtos():Observable<CarDtoResponseModel>{
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl);
  }
}
