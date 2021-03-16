import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {

  apiUrl="https://localhost:44375/api/rentals/getrentaldetailsdto"

  constructor(private httpClient:HttpClient) { }

  getRentalDtos():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);
  }
}
