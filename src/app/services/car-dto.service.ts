import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl="https://localhost:44375/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDtos():Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getbybrandid?id=" + id
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getbycolorid?id=" + id
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
