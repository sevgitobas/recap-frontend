import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cardtos:CarDto[] = [];

  constructor(private carDtoService:CarDtoService) { }

  ngOnInit(): void {
    this.getCarDtos();
  }

  getCarDtos(){
    this.carDtoService.getCarDtos().subscribe(response=>{this.cardtos=response.data});
  }
}
